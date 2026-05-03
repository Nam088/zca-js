#!/usr/bin/env node
/**
 * Fix semver tags that exist in the repo but are not ancestors of HEAD (common after
 * squash merge / history rewrite). semantic-release then tries to recreate the same
 * version and fails with "tag already exists".
 *
 * For each orphan tag vX.Y.Z:
 * - If npm has that version and publishes gitHead, move the tag to that commit (must be on HEAD history).
 * - If npm has no such version, delete the orphan tag from origin so a real release can recreate it.
 */
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

function sh(cmd, opts = {}) {
    return execSync(cmd, { encoding: "utf8", ...opts }).trim();
}

function shInherit(cmd) {
    execSync(cmd, { stdio: "inherit" });
}

function listSemverTags() {
    return sh("git tag -l 'v[0-9]*.[0-9]*.[0-9]*'")
        .split("\n")
        .filter(Boolean);
}

function cmpSemverTag(a, b) {
    const pa = a.replace(/^v/, "").split(".").map(Number);
    const pb = b.replace(/^v/, "").split(".").map(Number);
    for (let i = 0; i < 3; i++) {
        if (pa[i] !== pb[i]) return pa[i] - pb[i];
    }
    return 0;
}

function isAncestor(ref, head = "HEAD") {
    try {
        sh(`git merge-base --is-ancestor ${ref} ${head}`);
        return true;
    } catch {
        return false;
    }
}

function listOrphanSemverTags() {
    const tags = listSemverTags().sort(cmpSemverTag);
    return tags.filter((t) => !isAncestor(t));
}

const pkg = JSON.parse(readFileSync(join(__dirname, "../package.json"), "utf8"));
const name = pkg.name;
if (!name) {
    console.error("repair-release-tags: missing package.json name");
    process.exit(1);
}

let orphans = listOrphanSemverTags();
if (orphans.length === 0) {
    console.log("repair-release-tags: all semver tags are ancestors of HEAD.");
    process.exit(0);
}

console.log("repair-release-tags: orphan tags:", orphans.join(", "));

for (const tag of [...orphans]) {
    const version = tag.replace(/^v/, "");
    const spec = `${name}@${version}`;

    let gitHead;
    try {
        gitHead = sh(`npm view "${spec}" gitHead`);
    } catch {
        console.log(`repair-release-tags: no npm version ${spec}; deleting orphan ${tag} on origin`);
        try {
            shInherit(`git push origin :refs/tags/${tag}`);
        } catch (e) {
            console.error(`repair-release-tags: failed to delete remote tag ${tag}`, e);
            process.exit(1);
        }
        try {
            sh(`git tag -d ${tag}`);
        } catch {
            /* local tag may not exist */
        }
        continue;
    }

    if (!gitHead || !/^[a-f0-9]{40}$/i.test(gitHead)) {
        console.error(`repair-release-tags: invalid or empty gitHead for ${spec}: ${gitHead}`);
        process.exit(1);
    }

    try {
        sh(`git cat-file -e ${gitHead}^{commit}`);
    } catch {
        console.error(`repair-release-tags: gitHead ${gitHead} from npm is not a commit in this repo`);
        process.exit(1);
    }

    let target = gitHead;
    if (!isAncestor(gitHead)) {
        let mergeBase;
        try {
            mergeBase = sh(`git merge-base ${gitHead} HEAD`);
        } catch {
            mergeBase = "";
        }
        if (!mergeBase || !isAncestor(mergeBase)) {
            console.error(
                `repair-release-tags: npm gitHead ${gitHead} for ${spec} is not on this branch and has no merge-base on HEAD; cannot auto-repair ${tag}`,
            );
            process.exit(1);
        }
        target = mergeBase;
        console.log(
            `repair-release-tags: npm gitHead not on main; moving ${tag} to merge-base ${target.slice(0, 7)}`,
        );
    } else {
        console.log(`repair-release-tags: moving ${tag} to npm gitHead ${target.slice(0, 7)}`);
    }
    try {
        shInherit(`git push origin :refs/tags/${tag}`);
    } catch (e) {
        console.error(`repair-release-tags: failed to delete remote tag ${tag}`, e);
        process.exit(1);
    }
    try {
        sh(`git tag -d ${tag}`);
    } catch {
        /* no local tag */
    }
    sh(`git tag ${tag} ${target}`);
    shInherit(`git push origin ${tag}`);
}

sh("git fetch origin '+refs/tags/*:refs/tags/*' --prune");

orphans = listOrphanSemverTags();
if (orphans.length > 0) {
    console.error("repair-release-tags: still orphan after repair:", orphans.join(", "));
    process.exit(1);
}

console.log("repair-release-tags: done; all semver tags are ancestors of HEAD.");
