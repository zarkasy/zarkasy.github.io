---
title: "My 100 percents Crash Free App and my Ignorance"
date: 2025-01-11T16:38:44+07:00
draft: false
---

A couple days ago I implemented [Crashlytics](https://firebase.google.com/docs/crashlytics) into my [App](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app&pcampaignid=web_share) and it made me a little bit panick. Currentyly my App has been publised for one year and few months in Google Play. I've released alot of updates beginning with only one fiture then now growing into twenty one educational menus or games. During these time I didn't felt the need to implement crashlytics lib into my app because of my ignorance.

![crash](/blog/posts/my-ignorance-about-crashlytics/crash.PNG)

In version 1.7.2 I not yet implement crashlytics, and I've always got information from Play Developer Dashboard that my latest relase was Healthy and 100% Crash Free. Starting from this version and going backward I've always a peace of mind because every release was a healthy release. I've always tested my App before release and also double check it using App bundle explorer in Play Developer Console. Usually before release, if I create an internal testing, Google will automatically test my App using ten devices to find if my App have problems of not, it will catch if there is a fatal error and I will be notified, also my App cannot be published until I fix it. So using this flow and looking at the "Healthy release, 100% Crash free" title I always felt confidence with my App.

In 1.8.0 I added a feature and also implemented Crashlytics sdk, also there were some chances I made. After releasing this version, I monitored how my app behave and I became panicked when I saw the number of many crashes happened in my App. How come my App went from crash free to crashes alot? I began to investigate what was the errors.

![crash detail](/blog/posts/my-ignorance-about-crashlytics/crash_detail.PNG)

After an investigation I found I've misplaced a function where it should executed asynchronously, where I placed it to run syncrhonously, but not only this, I saw alot of errors that causes alot of crashes. But after a fix and relases the updates, I still couldn't get the crash free app.

![crash info](/blog/posts/my-ignorance-about-crashlytics/crash2.PNG)

Now the status of my release changed into **Need Investigations**. There are some categories that we should understand for the status, they are:

1. Successful release: The release is stable ( < 1% crashing sessions) and adoption is greater than 10% of daily active users (DAU)\*
2. Needs investigation (yellow): 1% of sessions (100 crashes per 10k sessions) crashed today and yesterday
3. Needs investigation (red): 10% of sessions (1k crashes per 10k sessions) crashed today and yesterday

But after I rechecked again my code and released not even one but four consecutive patches I've come to a conclusion that the **crash** here doesn't mean your app crashed in you user's device, bit it throws exception that either caught by exception handler of handled by your framework that not necessarily causing your app to stop. After I realize this, I stop worrying about my not crash free app and start focusing on fix bugs I can fix because there are bugs that caused not by my code but by library I use.
