---
title: "Do not be lazy testing your Code"
date: 2024-11-27T13:47:16+07:00
draft: false
---

In software development, testing is one of important process for assuring quality of software. Testing can be done manually but it will be energy and time consuming, or it can be done automatically, but usually developers are lazy, including me. A few days ago i wrote a [post](https://aplikasihebat.com/blog/posts/how-ignoring-testing-got-me-bit-in-the-ass/) about a mistake I made because I didn't do testing for my [App](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app). The result although not very fatal, but still I didn't deliver a good software for my users, especially that my App already used by five thousands children monthly.

![testing](/blog/posts/do-not-be-lazy-testing-your-code/testing.PNG)

Now after I learnt about my mistakes, finally I wrote several testings for my App. As my app grew in it's features, I began feel tired to do manual testing. Initially when I finished adding a feature, I only tested it manually, usually by trying the new feature, checking the process to make sure that no error popped up. But right now I have twenty games or menus in my App, and after I wrote the tests, suddenly the errors that I didn't know before showed up.

From this experince I learnt few things, and to give you a context, I am talking about testing for Flutter application. In flutter, there are three type of test we can do.

1. Unit testing
2. Widget testing
3. Integration testing

I will briefly explain what are they, Unit testing is for testing a function or class behaviour, widget testing is for testing widget behaviour, we can view the user interface in here, and the last, integration testing if for testing the overall process of how your app running, we can look the user interface moving from one process to the next depending of how we wrote the test. The confidence degree goes up from unit testing to integration testing. For my App I only do Integration testing for a reason, that is because the resources that I have is very limited that I want to make sure that my App runs properly and smoothly.

Now I know what to do in the future when I add new feature to my App. I think they are:

1. Add assertion for critical functions or methods to make sure the flow is as expected. This example below is what I meant, by adding assertion to critical place, I think I can reduce the number of unit testing that I need to do, because with assertion, the flow of my program can be guaranteed as I expected, if there were an error, it would get stopped by AssertionError.

```dart
int getIndexOfLetterInAlphabets(String letter){
    assert(letter.length == 1);
    return alphabet.indexOf(letter);
}
```

2. Only after I am sure that my new feature is complete, I will began to write my integration test. I know that there is some paradigm in developing software named Test Driven Development, but after assesed my situation, I think TDD is not suitable for me if I need to write a test everytime I've wrote a function.

After I wrote 23 tests for my App, I think I can mentioned some of benefits I got from this automatic testing.

1. Repeatable.
2. Effective.
3. Comprehensive in sense of with one command I can cover all functionalities test.
4. Uncover unkown error that hidden when testing done manually.
5. Increase confidence when releasing my App.

So for my reminder in the future, do not be lazy to do testing.
