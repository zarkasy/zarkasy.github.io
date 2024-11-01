---
title: "Improving Admob Banner Match Rate"
date: 2024-11-01T17:12:26+07:00
draft: false
---

This is my experiences in using [Admob](https://admob.google.com/) services, as you might have know that I developed my [App](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app) for quite time, and along the way after reached dozens of downloads, i immplemented Admob into my App. Some knowledge I gained using Admob services, especially the mistakes I've made when implemented the Ads.

# Interstitial Ad

Much of my ads reveneu came from this type of ads, but you have to aware to not overdid your request of this ads. I got my ads traffic limited because my miss-implementation that caused may app to made Ad request too frequently. The balance is to give interval in between Ad request, and i am using 3-4 minutes interval and my match rate gone up.

# Banner Ad

There are several type of implementation I've tried.

1. Only using one instance of BannerAd and sharing it with all widgets. This is failed because it causing error saying that each admob widget must be given new instance of BannerAd.
2. Using interval as Interstitial Ad implementation, the result is yet to know because i just implemented it. I will give update after one or two weeks to see the effets.

The main point is, do not too often make Ad request to Admob server, give it 3-4 minutes interval for Interstitial Ad and 1-2 minutes interval for Banner ad.
