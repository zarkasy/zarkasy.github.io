---
title: "Host Multiple Flutter Projects in Github Pages"
date: 2024-10-08T07:49:01+07:00
draft: false
---

I remembered when I picked [Flutter](https://flutter.dev/) as my next tool to create my [next project](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app) I had a vision where i can publish my app into [Google Play Store](https://play.google.com/store/games?device=windows) and my own website. The reason behind it was I don't want work only tied down into only one platform, and Flutter certainly enabled it.

One of the advantage of using Flutter as framework to build apps is its versatility, with one source code, although you still need to make adjustments within your code, you can publish app for Android, [IOS](https://www.apple.com/id/app-store/), [Windows](https://apps.microsoft.com/home?hl=en-US&gl=US), and Web. There are many [examples](https://flutter.dev/showcase) outthere where big companies using Flutter to build their apps, and we can do it too.

I mentioned earlier that I've succeeded plublishing [my app](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app) not only into Play Store but also into this website, you can check it [here](https://aplikasihebat.com/belajar-baca/). This is a little step forward to make my website as gallery for my projects, and Flutter really suits it.

## Understanding Flutter Limits

From my experience in developing an app with Flutter, beside its advantage in its fleksibility, there is one weakness I noticed that flutter have, that is its limitation in using native API, whether it was Android or Web. For example, flutter is very good to build beautiful UI and simple game using [Flame Engine](https://flame-engine.org/), I felt that flutter was so natural to build pretty UI, but if you want to build app that leveraging native API such as WebRTC, GeoFencing, Geotracking, you have to do your research before pouring your time and energy into Flutter. But if you one to build simple apps with beautiful and pretty animations, flutter suits you.

## Hosting Flutter Apps in Github Pages

For this website and my app, I am using this screnario.

```
HomePageProject/
    index.html
    assets/

    MyApp/
        index.html
        assets/

    Blog/
        index.html
```

I said earlier that in this website I hosted three projects, two are flutter projects and one is [Hugo](https://gohugo.io/). To host your Flutter app into github pages you need to generate the web output from flutter using this command.

```
flutter build web
```

For the HomePageProject which is Flutter project, i just genereated it using the command above, but for the second project which is this [app](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app) there are few steps todo.

1. Create subfolder inside root project.
2. Generate Flutter web for second project with --base-href=/MyApp/
3. Copy the content of build outputs from second projects into MyApp subfolder

```
flutter build web --base-href=/MyApp/
```

Above is command for building flutter app for MyApp which you need to move the contents into subfolder you created earlier in your main project folder.

After we have prepare the files of our projects, we can push it into github pages.
