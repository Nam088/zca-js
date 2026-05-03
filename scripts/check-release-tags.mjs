#!/usr/bin/env node
/**
 * Fail fast when a semver tag exists in the repo but is not an ancestor of HEAD.
 * In that case semantic-release may compute the same version again and hit:
 *   fatal: tag 'vX.Y.Z' already exists
 */
import { execSync } from "node:child_process";

function sh(cmd) {
    return execSync(cmd, { encoding: "utf8" }).trim();
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

const tags = listSemverTags().sort(cmpSemverTag);
const orphans = [];

for (const tag of tags) {
    try {
        sh(`git merge-base --is-ancestor ${tag} HEAD`);
    } catch {
        orphans.push(tag);
    }
}

if (orphans.length === 0) {
    console.log("check-release-tags: all semver tags are ancestors of HEAD.");
    process.exit(0);
}

console.error(
    [
        "check-release-tags: these tags exist but are NOT on the current branch history:",
        ...orphans.map((t) => `  - ${t}`),
        "",
        "semantic-release may try to create the same version again and fail with 'tag already exists'.",
        "Fix (pick one):",
        "  • If the tag was mistaken: delete it on GitHub, then re-run the workflow:",
        ...orphans.map((t) => `      git push origin :refs/tags/${t}`),
        "  • If you use squash merge: the release commit may no longer be on main.",
        "  • If npm already has @nam088/zca-js@3.1.0: do NOT delete the npm version. Instead move",
        "    the git tag to a commit that is on main and matches that release, e.g.:",
        "      git push origin :refs/tags/v3.1.0",
        "      git tag v3.1.0 <commit-on-main>",
        "      git push origin v3.1.0",
        "    Then the next semantic-release run can bump to 3.1.1 from new commits.",
    ].join("\n"),
);
process.exit(1);
