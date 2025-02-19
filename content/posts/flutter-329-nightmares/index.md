---
title: "Flutter 3.29.0 Nightmares"
date: 2025-02-19T08:05:26+07:00
draft: false
---
Yesterday was a cloudy day, I sat in front of my computer writing some codes trying to fix some bugs in my [App](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app&pcampaignid=web_share). According to Crashlitycs, my app only has 68% crash free sessions, the culprit was audioplayers constantly crashed when loading certain audio files.

When I openend my terminal and began stroking some letters to fire a command, I got a flash of information that a new Flutter version was available, so without thinking much I run _flutter upgrade_ to change the version into 3.29.

No much hassle in fixing the bugs, then I began testing the entire code then errors began showing up. The errors was clearly not coming from my code, but it said that an animation tickers still running when the process already closed. Its weird because I never had this error before. I tried to fix it, maybe I need to give it some time for the animation to complete. For the first test, the errors remains but reduce into only one failed test. Then I began to sucpicious the cause of this errors was the new Flutter SDK itself.

The worst part about fixing this was, I forgot which previous version I used, but luckily I found it, it was Flutter 3.27.4 as my stable sdk. All tested passed succussfully and an updates released on google play.
