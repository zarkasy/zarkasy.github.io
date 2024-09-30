---
title: "Bugs in Audioplayers Package"
date: 2024-09-30T09:15:37+07:00
draft: false
---

This writings is to remind myself in the future when developing apps using flutter and especially if using
[AudioPlayers](https://pub.dev/packages/audioplayers) package.

# The Bug

So for my [application](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app) which is an education App i have been developed for over one year now, started as unserious project because i had google developer account that has been laying around. It was when Flutter was began to get famous for it's flexibility, write once and publish everywhere, either google play store, ios, web, and desktop. Intrigued by the promise, i dipped my hand in this framework. Honestly i quite like the way flutter create the UI for apps, it composed of widgets and quite natural to use compared to javafx.

The first feature i created was called "Learning to read without spelling", i dont know if my translation from Indonesian is correct, but basically it is a new method to teach kid learning to read faster without them have to know about each alphabets first. So this feature required voice to help children know how to read the words when they click or tap the word. Initially I use potrait as my app's screen orientation, but as time goes and also with more addition of menus to my app, I began to changed the new screen orientations of new menu to landscape. Everything goes well until few weeks ago where the crash and ANR rate for my app began to hike, and the culprit was audioplayer.

![Audioplayer Bugs](/audioplayer_bugs.PNG)

As the picture above, from today alone as a write this post, the crashs caused by audioplayers totaled 79 users affected. So yesterday i began to bugs hunting, because you also have to know, if you have apps on playstore and your crash and ANR goes beyond the normal limits, your app visibility will goes down, so did my app, it goes from became one of the top result for certain keyword searches to become gone nowhere.

# The solutions

So after i looked serveral times to my source code, i accidentally found that when audio was playing in one menu, then i closed that menu and switched to another game, if the new game's screen orientation is not the same as the previuos one, it will crash. Also it happened the the ReleaseMode.loop is used.

```
\First menu in landscape oriantation
    \Playing looping background sound
    \Stop all the playing audios
    \Clear all caches
\Second menu in potrait orientation
    \Sound from the previous menu began to play.
    \Stop this menu

Crashed
```

So few key events that happened were:

1. AudioPlayers playing sound in looping using ReleaseMode.loop
2. Switch to another menu with difference orientations.

So after noticed this behaviour, i refactored all my games and menus in my app into landscape orientations. After tested serveral times, no more crash happened in my app.
