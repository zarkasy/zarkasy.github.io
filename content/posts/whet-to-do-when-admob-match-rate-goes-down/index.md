---
title: "What to do when Admob Match Rate goes down."
date: 2024-12-05T14:09:04+07:00
draft: false
---

When I started implementing Admob as a way to get income for my [App](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app&pcampaignid=web_share), I only got a meager amount of money, now even though the situations are still the same, but it's improving :). What I've learnt that the income we get from admob varies on where your App mainly published, or who uses your app. If you are publishing your app in USA or Europe, highy chance you'll get better profits that if in Asia or Africa. I think that because the Advertisers in those regions pays higher to Google than in the developing countries. This can be your considerations when deciding which country to publish your app.

This lessons will become one of my deciding factors in releasing my next Application. Altough I think there's pros and cons when publishing our Apps locally vs globally. What comes to my mind is when publishing App locally, you have deeper knowledge about people behaviour there, about the locality and cultures. I think they are important factor when creating an Application, because creating an App is not only for the sake of creating Apps or getting money, but it's more of giving solutions to people. For example, my [App](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app&pcampaignid=web_share) which is an educatinal app for children would not be accepted if I published it in regioun like USA or Europe, because not only I am using Bahasa Indonesia as the language, but also the menus was made according the local cultures, like the songs used in one of it's menus. So, I think when developing an App, do not think for profit first, but think what we offering to our users, and I knew many supposedly an International App which maybe has better UI but only gets less that a thousands downloads.

The pros when publishing App globally obviously the chance to get more users are higher if our Apps are really good and really answers the user's problems. But when they're not, do not be dicouraged when your App not succed, you can try again. What I noticed about Apps that succeded globally are usually utilites or Gaming apps. For example Apps like PDF reader, Barcode readers, file explorers, video editors, music players get many downloads, because it is a common problem for many of us.

# Mistakes I Learned using Admob

There are many types of Ad provided by Admob such as, Banner Ads, Interstitial, Rewarded, App Open, and Native. I want to discuss three here, the Banner, Interstitial and Native, because I've tried it and I know how they performed.

For App Open I've never implemented it because I feel that my App is only made to mine Ads and I do not want to do that. In the beginning I only implemented Interstitial Ad, and it performed well. Right now the Interstitial Ad contributes to 80 percent income from Admob. But you need to be careful when implementing this type of Ad, I onced got my Ad request limited because miss implementations. What I learned was to give enough intervals between each ad request, what I do is three to four minutes is safe periods to make Ad request. You can implement it directly inside your App or you can set request Cap using Admob settings.

Second, Banner Ad, I used to hesitated in implementing this type of Ad, I was afraid that my user would dislike my App because this banner Ad, so for Interstitial Ad is only showed in between app flow, but banner Ad will keep showing througout your App. But it turns out my concern was not true, after I applied this banner Ad into my App, I did'nt see negative reviews towards my App, and also this type of Ad contribute to 20% of my Ad reveneu.

Last is native Ad, this is honestly the poorest performing type of Ad that i've tried, so I do not use it anymore.

One last not about Admob, usually when you change your Ad implementations, for example, in the last release, I added more banner Ad to some of my App menus, before I only applied it into three of menus, now I think 17 of them have Banner Ad. So the consequences are Ad requests from my App jumping very high, this will lead to your match rate going down, in my case, my match rate went from 40% to 15%, but do not worry, once google finish evaluating you ad request quality, if they comfirm that the requests are not from bots, your mathing rate will heal up, like mine.

So that is my experience in using Admob, I think if you want to get more revenue from your App, you have to make your users buy your app, even better if you can make them pay subscription, but that would be very hard, and I felt that also.