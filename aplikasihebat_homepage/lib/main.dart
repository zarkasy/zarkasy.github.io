import 'package:aplikasihebat_homepage/components/home_content.dart';
import 'package:aplikasihebat_homepage/components/kontak_content.dart';
import 'package:aplikasihebat_homepage/components/page_template.dart';
import 'package:aplikasihebat_homepage/components/tentang_content.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

void main() {
  runApp(const MyApp());
}

final GoRouter _router = GoRouter(routes: <RouteBase>[
  GoRoute(
    path: '/',
    builder: (context, state) {
      return PageTemplate(HomeContent());
    },
  ),
  GoRoute(
    path: '/about',
    builder: (context, state) {
      return PageTemplate(TentangContent());
    },
  ),
  GoRoute(
    path: '/contact',
    builder: (context, state) {
      return PageTemplate(KontakContent());
    },
  ),
]);

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Aplikasi Hebat',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // TRY THIS: Try running your application with "flutter run". You'll see
        // the application has a purple toolbar. Then, without quitting the app,
        // try changing the seedColor in the colorScheme below to Colors.green
        // and then invoke "hot reload" (save your changes or press the "hot
        // reload" button in a Flutter-supported IDE, or press "r" if you used
        // the command line to start the app).
        //
        // Notice that the counter didn't reset back to zero; the application
        // state is not lost during the reload. To reset the state, use hot
        // restart instead.
        //
        // This works for code too, not just values: Most code changes can be
        // tested with just a hot reload.
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: MaterialApp.router(
        routerConfig: _router,
      ),
    );
  }
}
