# [3.1.0](https://github.com/Nam088/zca-js/compare/v3.0.0...v3.1.0) (2026-05-03)


### Bug Fixes

* **api:** cast Buffer to BodyInit for compatibility with fetch API ([b606d96](https://github.com/Nam088/zca-js/commit/b606d962a093b218d7095bb6db4d0f182dcfbc93))
* **api:** remove unnecessary type casting for Buffer in changeAccountAvatar and changeGroupAvatar APIs ([a68515b](https://github.com/Nam088/zca-js/commit/a68515b4a63df0e29dd492eaaacca5d1713cf84e))
* **api:** update body type to Uint8Array for multiple API endpoints ([64d4fb4](https://github.com/Nam088/zca-js/commit/64d4fb4f73a3beaaab4e92ea8325041fef4eefc8))
* **cookie:** set correct domain to avoid issues ([#212](https://github.com/Nam088/zca-js/issues/212)) ([cf6e484](https://github.com/Nam088/zca-js/commit/cf6e484b7e579af0ec360e2641d55a6f21350be8))
* export FriendRecommendationsType as enum instead of type ([217f82a](https://github.com/Nam088/zca-js/commit/217f82a2ce0884e460dbff646ffa5331d259e368))
* **fetchAccountInfo:** update FetchAccountInfoResponse type to include profile object ([a15e48e](https://github.com/Nam088/zca-js/commit/a15e48e0e7b1f3ac94e6c5ff10bde54f6a59de0c))
* **getGroupChatHistory:** parse response to correct response type ([32cbc3e](https://github.com/Nam088/zca-js/commit/32cbc3e8b26355cc416492dac905717b83752ad6))
* **index.ts:** remove StickerDetail type export from getStickersDetail ([61ac0cd](https://github.com/Nam088/zca-js/commit/61ac0cd8cd37d6587b087458a49adfb91d273046))
* **listen:** resolve parsing error on cmd 602 (close [#261](https://github.com/Nam088/zca-js/issues/261)) ([b646a60](https://github.com/Nam088/zca-js/commit/b646a600bf16f696e932a8fc0e605c038e06c0d3))
* **sendMessage:** send correct groupLayout params to preserve attachment order ([c2ada3c](https://github.com/Nam088/zca-js/commit/c2ada3c5edb7ccfa7b46e48656bf322e72f9cb91))
* Type 'Buffer' is not assignable to type 'BodyInit' ([28cb471](https://github.com/Nam088/zca-js/commit/28cb47113006f6018f5457f8b3488dff5411c6d5))
* update fs import to use node:fs and improve documentation in findUserByUsername API ([a03200e](https://github.com/Nam088/zca-js/commit/a03200e17da7b1ff96bb9ec8dcb6ba9ab768af4c))
* **uploadAttachment:** ensure results array order matches sources order ([8d7a6b4](https://github.com/Nam088/zca-js/commit/8d7a6b465aa85dba410ea8045c8bb9f87a54b97d))
* use getSetCookie() to properly parse set-cookie headers ([0ef6cb5](https://github.com/Nam088/zca-js/commit/0ef6cb53ed4f832802b4bbf1e3b4621fd96d9ba9))


### Features

* **api:** add avatarSize parameter to user-related API endpoints for customizable avatar sizes ([99ba002](https://github.com/Nam088/zca-js/commit/99ba002e12e039a5e22c10201dccd0417b75417e))
* **api:** add findUserByUsername API endpoint and response type ([2f57a60](https://github.com/Nam088/zca-js/commit/2f57a60006afa587fed8e0ffd94086ec64a64222))
* **api:** add getAvatarUrlProfile and getFullAvatar API endpoints and response types ([9ac2b76](https://github.com/Nam088/zca-js/commit/9ac2b76cd464d90ca672198706250f4a840976a9))
* **api:** add getCloseFriends and updateStatus API endpoints with corresponding response types ([fba2af5](https://github.com/Nam088/zca-js/commit/fba2af51de569b6397a1833f3b477d2d134b2dfd))
* **api:** add getGroupChatHistory API endpoint and response type ([abc2400](https://github.com/Nam088/zca-js/commit/abc240006ded84a6cc53c072c9d5a1ca45b3c23a))
* **api:** add getMultiUsersByPhone API endpoint and response type ([cbe6a99](https://github.com/Nam088/zca-js/commit/cbe6a9924219c2d1b64fc70852a2ff37bc2e98e2))
* **api:** add getSearchSticker and getStickerCategoryDetail endpoints with corresponding types ([a7bdaa2](https://github.com/Nam088/zca-js/commit/a7bdaa2d7a6351202cda0bb444d628d82a789776))
* **api:** add GetStickerCategoryDetailResponse type and remove GetStickerSuggestionResponse type from index ([6980d99](https://github.com/Nam088/zca-js/commit/6980d997f353b81f98d8ead037ed1274ef2f7f50))
* **api:** add setArchivedConversations (close [#199](https://github.com/Nam088/zca-js/issues/199)) ([976eba8](https://github.com/Nam088/zca-js/commit/976eba8dca843ceb6fddfd3b19e343ea6b9c4cb4))
* **api:** add upgradeGroupCommunity API endpoint and response type ([c6de2d8](https://github.com/Nam088/zca-js/commit/c6de2d8ab3a44ae108794d1bd4f38596a64b0a58))
* **apis:** add updateProfileBio and upgradeGroupToCommunity APIs ([3c66bb3](https://github.com/Nam088/zca-js/commit/3c66bb3f01df36490f28bb7fa0f8858cc9294982))
* **getFriendRecommendations:** add FriendRecommendationsType enum ([648eef9](https://github.com/Nam088/zca-js/commit/648eef9e5469faa6498ef0fe718c535993da6d37))
* **getGroupChatHistory:** parse groupMsgs item with GroupMessage ([b198b4b](https://github.com/Nam088/zca-js/commit/b198b4b38fd1e91bd5f75bff33e26401f6958f99))
* Implement automated releases using semantic-release and GitHub Actions. ([7fcc602](https://github.com/Nam088/zca-js/commit/7fcc6027e955bbf50926c738ffaca84fbbcc8b33))

# [3.1.0](https://github.com/Nam088/zca-js/compare/v3.0.0...v3.1.0) (2026-05-03)


### Bug Fixes

* **api:** cast Buffer to BodyInit for compatibility with fetch API ([b606d96](https://github.com/Nam088/zca-js/commit/b606d962a093b218d7095bb6db4d0f182dcfbc93))
* **api:** remove unnecessary type casting for Buffer in changeAccountAvatar and changeGroupAvatar APIs ([a68515b](https://github.com/Nam088/zca-js/commit/a68515b4a63df0e29dd492eaaacca5d1713cf84e))
* **api:** update body type to Uint8Array for multiple API endpoints ([64d4fb4](https://github.com/Nam088/zca-js/commit/64d4fb4f73a3beaaab4e92ea8325041fef4eefc8))
* **cookie:** set correct domain to avoid issues ([#212](https://github.com/Nam088/zca-js/issues/212)) ([cf6e484](https://github.com/Nam088/zca-js/commit/cf6e484b7e579af0ec360e2641d55a6f21350be8))
* export FriendRecommendationsType as enum instead of type ([217f82a](https://github.com/Nam088/zca-js/commit/217f82a2ce0884e460dbff646ffa5331d259e368))
* **fetchAccountInfo:** update FetchAccountInfoResponse type to include profile object ([a15e48e](https://github.com/Nam088/zca-js/commit/a15e48e0e7b1f3ac94e6c5ff10bde54f6a59de0c))
* **getGroupChatHistory:** parse response to correct response type ([32cbc3e](https://github.com/Nam088/zca-js/commit/32cbc3e8b26355cc416492dac905717b83752ad6))
* **index.ts:** remove StickerDetail type export from getStickersDetail ([61ac0cd](https://github.com/Nam088/zca-js/commit/61ac0cd8cd37d6587b087458a49adfb91d273046))
* **listen:** resolve parsing error on cmd 602 (close [#261](https://github.com/Nam088/zca-js/issues/261)) ([b646a60](https://github.com/Nam088/zca-js/commit/b646a600bf16f696e932a8fc0e605c038e06c0d3))
* **sendMessage:** send correct groupLayout params to preserve attachment order ([c2ada3c](https://github.com/Nam088/zca-js/commit/c2ada3c5edb7ccfa7b46e48656bf322e72f9cb91))
* Type 'Buffer' is not assignable to type 'BodyInit' ([28cb471](https://github.com/Nam088/zca-js/commit/28cb47113006f6018f5457f8b3488dff5411c6d5))
* update fs import to use node:fs and improve documentation in findUserByUsername API ([a03200e](https://github.com/Nam088/zca-js/commit/a03200e17da7b1ff96bb9ec8dcb6ba9ab768af4c))
* **uploadAttachment:** ensure results array order matches sources order ([8d7a6b4](https://github.com/Nam088/zca-js/commit/8d7a6b465aa85dba410ea8045c8bb9f87a54b97d))
* use getSetCookie() to properly parse set-cookie headers ([0ef6cb5](https://github.com/Nam088/zca-js/commit/0ef6cb53ed4f832802b4bbf1e3b4621fd96d9ba9))


### Features

* **api:** add avatarSize parameter to user-related API endpoints for customizable avatar sizes ([99ba002](https://github.com/Nam088/zca-js/commit/99ba002e12e039a5e22c10201dccd0417b75417e))
* **api:** add findUserByUsername API endpoint and response type ([2f57a60](https://github.com/Nam088/zca-js/commit/2f57a60006afa587fed8e0ffd94086ec64a64222))
* **api:** add getAvatarUrlProfile and getFullAvatar API endpoints and response types ([9ac2b76](https://github.com/Nam088/zca-js/commit/9ac2b76cd464d90ca672198706250f4a840976a9))
* **api:** add getCloseFriends and updateStatus API endpoints with corresponding response types ([fba2af5](https://github.com/Nam088/zca-js/commit/fba2af51de569b6397a1833f3b477d2d134b2dfd))
* **api:** add getGroupChatHistory API endpoint and response type ([abc2400](https://github.com/Nam088/zca-js/commit/abc240006ded84a6cc53c072c9d5a1ca45b3c23a))
* **api:** add getMultiUsersByPhone API endpoint and response type ([cbe6a99](https://github.com/Nam088/zca-js/commit/cbe6a9924219c2d1b64fc70852a2ff37bc2e98e2))
* **api:** add getSearchSticker and getStickerCategoryDetail endpoints with corresponding types ([a7bdaa2](https://github.com/Nam088/zca-js/commit/a7bdaa2d7a6351202cda0bb444d628d82a789776))
* **api:** add GetStickerCategoryDetailResponse type and remove GetStickerSuggestionResponse type from index ([6980d99](https://github.com/Nam088/zca-js/commit/6980d997f353b81f98d8ead037ed1274ef2f7f50))
* **api:** add setArchivedConversations (close [#199](https://github.com/Nam088/zca-js/issues/199)) ([976eba8](https://github.com/Nam088/zca-js/commit/976eba8dca843ceb6fddfd3b19e343ea6b9c4cb4))
* **api:** add upgradeGroupCommunity API endpoint and response type ([c6de2d8](https://github.com/Nam088/zca-js/commit/c6de2d8ab3a44ae108794d1bd4f38596a64b0a58))
* **apis:** add updateProfileBio and upgradeGroupToCommunity APIs ([3c66bb3](https://github.com/Nam088/zca-js/commit/3c66bb3f01df36490f28bb7fa0f8858cc9294982))
* **getFriendRecommendations:** add FriendRecommendationsType enum ([648eef9](https://github.com/Nam088/zca-js/commit/648eef9e5469faa6498ef0fe718c535993da6d37))
* **getGroupChatHistory:** parse groupMsgs item with GroupMessage ([b198b4b](https://github.com/Nam088/zca-js/commit/b198b4b38fd1e91bd5f75bff33e26401f6958f99))
* Implement automated releases using semantic-release and GitHub Actions. ([7fcc602](https://github.com/Nam088/zca-js/commit/7fcc6027e955bbf50926c738ffaca84fbbcc8b33))

# [3.1.0](https://github.com/Nam088/zca-js/compare/v3.0.0...v3.1.0) (2026-03-12)


### Bug Fixes

* **api:** cast Buffer to BodyInit for compatibility with fetch API ([b606d96](https://github.com/Nam088/zca-js/commit/b606d962a093b218d7095bb6db4d0f182dcfbc93))
* **api:** remove unnecessary type casting for Buffer in changeAccountAvatar and changeGroupAvatar APIs ([a68515b](https://github.com/Nam088/zca-js/commit/a68515b4a63df0e29dd492eaaacca5d1713cf84e))
* **cookie:** set correct domain to avoid issues ([#212](https://github.com/Nam088/zca-js/issues/212)) ([cf6e484](https://github.com/Nam088/zca-js/commit/cf6e484b7e579af0ec360e2641d55a6f21350be8))
* export FriendRecommendationsType as enum instead of type ([217f82a](https://github.com/Nam088/zca-js/commit/217f82a2ce0884e460dbff646ffa5331d259e368))
* **fetchAccountInfo:** update FetchAccountInfoResponse type to include profile object ([a15e48e](https://github.com/Nam088/zca-js/commit/a15e48e0e7b1f3ac94e6c5ff10bde54f6a59de0c))
* **getGroupChatHistory:** parse response to correct response type ([32cbc3e](https://github.com/Nam088/zca-js/commit/32cbc3e8b26355cc416492dac905717b83752ad6))
* **index.ts:** remove StickerDetail type export from getStickersDetail ([61ac0cd](https://github.com/Nam088/zca-js/commit/61ac0cd8cd37d6587b087458a49adfb91d273046))
* **listen:** resolve parsing error on cmd 602 (close [#261](https://github.com/Nam088/zca-js/issues/261)) ([b646a60](https://github.com/Nam088/zca-js/commit/b646a600bf16f696e932a8fc0e605c038e06c0d3))
* **sendMessage:** send correct groupLayout params to preserve attachment order ([c2ada3c](https://github.com/Nam088/zca-js/commit/c2ada3c5edb7ccfa7b46e48656bf322e72f9cb91))
* Type 'Buffer' is not assignable to type 'BodyInit' ([28cb471](https://github.com/Nam088/zca-js/commit/28cb47113006f6018f5457f8b3488dff5411c6d5))
* update fs import to use node:fs and improve documentation in findUserByUsername API ([a03200e](https://github.com/Nam088/zca-js/commit/a03200e17da7b1ff96bb9ec8dcb6ba9ab768af4c))
* **uploadAttachment:** ensure results array order matches sources order ([8d7a6b4](https://github.com/Nam088/zca-js/commit/8d7a6b465aa85dba410ea8045c8bb9f87a54b97d))


### Features

* **api:** add avatarSize parameter to user-related API endpoints for customizable avatar sizes ([99ba002](https://github.com/Nam088/zca-js/commit/99ba002e12e039a5e22c10201dccd0417b75417e))
* **api:** add findUserByUsername API endpoint and response type ([2f57a60](https://github.com/Nam088/zca-js/commit/2f57a60006afa587fed8e0ffd94086ec64a64222))
* **api:** add getAvatarUrlProfile and getFullAvatar API endpoints and response types ([9ac2b76](https://github.com/Nam088/zca-js/commit/9ac2b76cd464d90ca672198706250f4a840976a9))
* **api:** add getCloseFriends and updateStatus API endpoints with corresponding response types ([fba2af5](https://github.com/Nam088/zca-js/commit/fba2af51de569b6397a1833f3b477d2d134b2dfd))
* **api:** add getGroupChatHistory API endpoint and response type ([abc2400](https://github.com/Nam088/zca-js/commit/abc240006ded84a6cc53c072c9d5a1ca45b3c23a))
* **api:** add getMultiUsersByPhone API endpoint and response type ([cbe6a99](https://github.com/Nam088/zca-js/commit/cbe6a9924219c2d1b64fc70852a2ff37bc2e98e2))
* **api:** add getSearchSticker and getStickerCategoryDetail endpoints with corresponding types ([a7bdaa2](https://github.com/Nam088/zca-js/commit/a7bdaa2d7a6351202cda0bb444d628d82a789776))
* **api:** add GetStickerCategoryDetailResponse type and remove GetStickerSuggestionResponse type from index ([6980d99](https://github.com/Nam088/zca-js/commit/6980d997f353b81f98d8ead037ed1274ef2f7f50))
* **api:** add setArchivedConversations (close [#199](https://github.com/Nam088/zca-js/issues/199)) ([976eba8](https://github.com/Nam088/zca-js/commit/976eba8dca843ceb6fddfd3b19e343ea6b9c4cb4))
* **api:** add upgradeGroupCommunity API endpoint and response type ([c6de2d8](https://github.com/Nam088/zca-js/commit/c6de2d8ab3a44ae108794d1bd4f38596a64b0a58))
* **apis:** add updateProfileBio and upgradeGroupToCommunity APIs ([3c66bb3](https://github.com/Nam088/zca-js/commit/3c66bb3f01df36490f28bb7fa0f8858cc9294982))
* **getFriendRecommendations:** add FriendRecommendationsType enum ([648eef9](https://github.com/Nam088/zca-js/commit/648eef9e5469faa6498ef0fe718c535993da6d37))
* **getGroupChatHistory:** parse groupMsgs item with GroupMessage ([b198b4b](https://github.com/Nam088/zca-js/commit/b198b4b38fd1e91bd5f75bff33e26401f6958f99))
* Implement automated releases using semantic-release and GitHub Actions. ([7fcc602](https://github.com/Nam088/zca-js/commit/7fcc6027e955bbf50926c738ffaca84fbbcc8b33))

# [3.1.0](https://github.com/Nam088/zca-js/compare/v3.0.0...v3.1.0) (2026-03-12)


### Bug Fixes

* **api:** cast Buffer to BodyInit for compatibility with fetch API ([b606d96](https://github.com/Nam088/zca-js/commit/b606d962a093b218d7095bb6db4d0f182dcfbc93))
* **api:** remove unnecessary type casting for Buffer in changeAccountAvatar and changeGroupAvatar APIs ([a68515b](https://github.com/Nam088/zca-js/commit/a68515b4a63df0e29dd492eaaacca5d1713cf84e))
* **cookie:** set correct domain to avoid issues ([#212](https://github.com/Nam088/zca-js/issues/212)) ([cf6e484](https://github.com/Nam088/zca-js/commit/cf6e484b7e579af0ec360e2641d55a6f21350be8))
* export FriendRecommendationsType as enum instead of type ([217f82a](https://github.com/Nam088/zca-js/commit/217f82a2ce0884e460dbff646ffa5331d259e368))
* **fetchAccountInfo:** update FetchAccountInfoResponse type to include profile object ([a15e48e](https://github.com/Nam088/zca-js/commit/a15e48e0e7b1f3ac94e6c5ff10bde54f6a59de0c))
* **getGroupChatHistory:** parse response to correct response type ([32cbc3e](https://github.com/Nam088/zca-js/commit/32cbc3e8b26355cc416492dac905717b83752ad6))
* **index.ts:** remove StickerDetail type export from getStickersDetail ([61ac0cd](https://github.com/Nam088/zca-js/commit/61ac0cd8cd37d6587b087458a49adfb91d273046))
* **listen:** resolve parsing error on cmd 602 (close [#261](https://github.com/Nam088/zca-js/issues/261)) ([b646a60](https://github.com/Nam088/zca-js/commit/b646a600bf16f696e932a8fc0e605c038e06c0d3))
* **sendMessage:** send correct groupLayout params to preserve attachment order ([c2ada3c](https://github.com/Nam088/zca-js/commit/c2ada3c5edb7ccfa7b46e48656bf322e72f9cb91))
* Type 'Buffer' is not assignable to type 'BodyInit' ([28cb471](https://github.com/Nam088/zca-js/commit/28cb47113006f6018f5457f8b3488dff5411c6d5))
* update fs import to use node:fs and improve documentation in findUserByUsername API ([a03200e](https://github.com/Nam088/zca-js/commit/a03200e17da7b1ff96bb9ec8dcb6ba9ab768af4c))
* **uploadAttachment:** ensure results array order matches sources order ([8d7a6b4](https://github.com/Nam088/zca-js/commit/8d7a6b465aa85dba410ea8045c8bb9f87a54b97d))


### Features

* **api:** add avatarSize parameter to user-related API endpoints for customizable avatar sizes ([99ba002](https://github.com/Nam088/zca-js/commit/99ba002e12e039a5e22c10201dccd0417b75417e))
* **api:** add findUserByUsername API endpoint and response type ([2f57a60](https://github.com/Nam088/zca-js/commit/2f57a60006afa587fed8e0ffd94086ec64a64222))
* **api:** add getAvatarUrlProfile and getFullAvatar API endpoints and response types ([9ac2b76](https://github.com/Nam088/zca-js/commit/9ac2b76cd464d90ca672198706250f4a840976a9))
* **api:** add getCloseFriends and updateStatus API endpoints with corresponding response types ([fba2af5](https://github.com/Nam088/zca-js/commit/fba2af51de569b6397a1833f3b477d2d134b2dfd))
* **api:** add getGroupChatHistory API endpoint and response type ([abc2400](https://github.com/Nam088/zca-js/commit/abc240006ded84a6cc53c072c9d5a1ca45b3c23a))
* **api:** add getMultiUsersByPhone API endpoint and response type ([cbe6a99](https://github.com/Nam088/zca-js/commit/cbe6a9924219c2d1b64fc70852a2ff37bc2e98e2))
* **api:** add getSearchSticker and getStickerCategoryDetail endpoints with corresponding types ([a7bdaa2](https://github.com/Nam088/zca-js/commit/a7bdaa2d7a6351202cda0bb444d628d82a789776))
* **api:** add GetStickerCategoryDetailResponse type and remove GetStickerSuggestionResponse type from index ([6980d99](https://github.com/Nam088/zca-js/commit/6980d997f353b81f98d8ead037ed1274ef2f7f50))
* **api:** add setArchivedConversations (close [#199](https://github.com/Nam088/zca-js/issues/199)) ([976eba8](https://github.com/Nam088/zca-js/commit/976eba8dca843ceb6fddfd3b19e343ea6b9c4cb4))
* **api:** add upgradeGroupCommunity API endpoint and response type ([c6de2d8](https://github.com/Nam088/zca-js/commit/c6de2d8ab3a44ae108794d1bd4f38596a64b0a58))
* **apis:** add updateProfileBio and upgradeGroupToCommunity APIs ([3c66bb3](https://github.com/Nam088/zca-js/commit/3c66bb3f01df36490f28bb7fa0f8858cc9294982))
* **getFriendRecommendations:** add FriendRecommendationsType enum ([648eef9](https://github.com/Nam088/zca-js/commit/648eef9e5469faa6498ef0fe718c535993da6d37))
* **getGroupChatHistory:** parse groupMsgs item with GroupMessage ([b198b4b](https://github.com/Nam088/zca-js/commit/b198b4b38fd1e91bd5f75bff33e26401f6958f99))
* Implement automated releases using semantic-release and GitHub Actions. ([7fcc602](https://github.com/Nam088/zca-js/commit/7fcc6027e955bbf50926c738ffaca84fbbcc8b33))
