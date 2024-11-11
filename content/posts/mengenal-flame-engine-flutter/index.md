---
title: "Knowing Flame Engine Flutter"
date: 2024-11-10T20:10:14+07:00
draft: false
---

I cannot say that I am a game developer, but accidently while developing my [App](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app) I stumbled upon a piece of library called [Flame Engine](https://flame-engine.org/). Flame engine is a game engine built on top of [Flutter](https://flutter.dev/). According to Wikipedia, [Game Engine](https://en.wikipedia.org/wiki/Game_engine) is a software framework primarily designed for the development of video games and generally includes relevant libraries and support programs such as a level editor.

Initally I was only using Flutter as my tools for developing games for my app, for example you can see some of my games only need click and drag as types of interactions needed to play the games, of course animations and audioplayer are supported by Flutter or third party libraries. But only using clicks and drag feels a bit boring, and I need to level up my game because I want to create a game that a little bit more complex and more appealing to children. Hence the first of my game called whack a mole was created using Flame Engine.

So in here I want to share my thought about Flame Engine, what is it and how to understand this library.

# Flame Engine is a Widget

If you already know Flutter you may have heard that in Flutter everything is a Widget, so true for Flame Engine, the main component that connecting it to Flutter is called _GameWidget_ which is also a Widget.

```dart
class GameWidget<T extends Game> extends StatefulWidget {
  /// Renders the provided [game] instance.
  GameWidget({
    required T this.game,
    this.textDirection,
    this.loadingBuilder,
    this.errorBuilder,
    this.backgroundBuilder,
    this.overlayBuilderMap,
    this.initialActiveOverlays,
    this.focusNode,
    this.autofocus = true,
    this.mouseCursor,
    this.addRepaintBoundary = true,
    super.key,
  }) : gameFactory = null {
    _initializeGame(game!);
  }
  // omitted
}
```

If you look it up the source code of game widget, you'll see that it is actualy a StatefulWidget. So what are the consequences of this, this means that with Flame Engine, you can treat is like any other widgets of Flutter, you can put it inside a container, or you can put it deep inside some other widget like Row, Stack, or Column.

Usually for to create game with Flame you need to utilise four clasess, they are:

1. GameWidget class as game container.
2. FlameGame class as parent of game components.
3. World class as place to puts your game objects such as your characters, your backgrounds, hence the name is World.
4. Component class to represent the object within the world.

```dart
class Home extends StatelessWidget{
  @override
  void build(){
    return GameWidget(
      world : FlameGame( children :
      [ World(children :
        [Player(), Background()]
        )
      ]));
  }
}
```

Above is rough picture of how you compose Flame classes to create a game. You adding up the smallest object of your game such as you player, backgrounds, enemies, and other objects into the World class, and the Word class will be loaded by the FlameGame class, and finally FlameGame class mounted by GameWidget as ordinary Flutter Widget.

# The layout system in Flame

The layout system in Flame are a bit different that what Flutter have, but it have similarities. In Flutter for layouting we have several classes such as Row, Column, Stack, GridView, but in Flame we have non of that. Flame using coordinate system to layout its components. So everything needs to have position and size, it's a bit similar to Stack class in Flutter. To give you a picture of how we put our components in Flame is like this.

```dart
class MyWorld extends World{
  @override
  void onLoad(){
    // adding background
    final background = Background();
    background.position = Vector(0, 0);
    background.size = Vector2(900, 600);
    add(background);

    // adding Player
    final player = Player();
    player.position = Vector2(10, 10);
    player.size = Vector2(50, 50);
    add(player);
  }
}
```

We need to specify both position and size variable in Flame's component. Using this coordinate systems will give us flexibility in layouting our components and when we need to move our components around, because we only need to update the position variable.

# Animations in Flame

As game engine, Flame provide several classes that focues on giving us abilites to create animations. A few important class are:

1. _SpriteAnimationComponent_ : is class to create animations from multiple sprite images.
2. _SpriteAnimationGroupComponent_ : is class to group several animations into a map, which we can change what animations to display according which key we select. For example we have Player component, and this player have walking animations, running animations, attacking animations, and idle animations. All of these animations can be contained using this class and called anytime using the key we've specified.

```dart
enum Movement{
  walking,
  running,
  idling,
  attacking
}

class Player extends SpriteAnimationGroupComponent<Movement>{
  @override
  void onLoad(){
    animations = {
      Movement.walking: walkingAnimations,
      Movement.running: runningAnimations,
      Movement.idling: idlingAnimations,
      Movement.attacking: attackingAnimations,
    }

    current = Movement.running;
  }
}
```

Above snippets displaying how we declare group animations in flame using SpriteAnimationGroupComponent. The _current_ variable is used to specify which state we want to call.
