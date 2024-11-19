---
title: "How Ignoring Testing Got Me Bit in the Ass"
date: 2024-11-19T14:12:19+07:00
draft: false
---

This is a story about the journey of my [App](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app&pcampaignid=web_share) of which began with only one menu and then growing into now of twenty menus. This is the story of ignoring testing causing harm in the latter stage of my App.

One year ago I began the developement of my first fiture, the menu called belajar membaca tanpa mengeja, thus it became the name of my App also. Because only one fiture existed on my App, and honestly it also really simple one, thus for testing I did it manually. There are two reasons why I did this, first because I just learnt about Flutter and second I didn't know how to do testing in Flutter.

In Flutter, they have three kinds of testing, first is unit testing, second is Widget Testing, and third is Integrations Testing. You may wondering when to use each of them. In here i am not gonna explain what are they because there are many resources you can find on internet explining what are they. Instead, I want to give you the lesson I've learnt of what the best strategies to do testing.

# Using assert

In dart language they have _assert_ function where we can test our expectation of what should happen during the code execution. I will give an example

```dart
int getIndexOfLetterInAlphabets(String letter){
    assert(letter.length == 1);
    return alphabet.indexOf(letter);
}
```

Above is a simple function to get index of letter in the alphabet. This is a really simple function and I am very confidence that we have this kind of simple function that we wrote inside our code base that we never tested. But should we test this kind of function? I think the answer is depends of the importance of the code, if the code function will impact the integrity of the flow of your app, the test it, if not then at least write this _assert_ gate so when something wrong happen, the dart compiler will tell you and your program will stop. Using this technique, now when I am writing a simple function, I will also try to write the assertions of how the flow of this function should work.

# Using integration test

I already wrote an article about integration testing, you can find it [here](https://aplikasihebat.com/blog/posts/mengenal-flutter-integration-tests/) but it's in Indonesian. So as the name, integration test is a testing that will run your program like human using your application. We can simulate of how our users will use our app, for example from the beginning they open our app, then moving to the next menu, and after that opening the next menu and so on. This kind of test is very important to ensure the integrity of your app flow. Using my experiences as an example, now i only have one integration test, the test is to simulate the opening of each my menus. Even I think this is a very simple integration test, still it helps alot to reduce the energy to do manual testing, also i only need to push the run button test to watch how my app run. But lately because I ignored testing for so long, I missed a condition where my game should start with level 0, instead of it began with the last level because I want to know how the congratulations page would show up when I tested it manually. As you can see, as my app growing bigger, and the update contiunues and the changes keep coming, having robust and throurough testing will help alot.

So the next thing will do know is write integration testing for each my fiture in the app, and test many edge cases that can happen so in the future I can be sure if there are new changes, I will not miss anything important because I've already wrote it in my test. Now the bug of one my game still in production and I still need to wait until it passes the review. So I hope you can take my experiences as your lesson to do testing in your app.
