import 'package:aplikasihebat_homepage/breakoutes.dart';
import 'package:aplikasihebat_homepage/components/menu_item.dart';
import 'package:aplikasihebat_homepage/main.dart';
import 'package:aplikasihebat_homepage/utils.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:url_launcher/url_launcher.dart';

class PageTemplate extends StatefulWidget {
  final Widget content;
  const PageTemplate(this.content, {super.key});

  @override
  State<StatefulWidget> createState() {
    return _PageTemplateState();
  }
}

class _PageTemplateState extends State<PageTemplate> {
  bool showDropDownMenu = false;
  IconData burgerIcon = Icons.menu;
  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    JenisScreen jenisScreen = getJenisScreen(context);
    var headerPadding = EdgeInsets.all(8);
    double titleFontSize = 12;
    double menuFontSize = 12;
    double appContainerSize = 200;
    double pengaliSize = 1;
    switch (jenisScreen) {
      case JenisScreen.SMALL:
        headerPadding = EdgeInsets.all(8);
        titleFontSize = 15;
        menuFontSize = 12;
        appContainerSize = appContainerSize;
      case JenisScreen.MEDIUM:
        headerPadding =
            EdgeInsets.symmetric(vertical: 10, horizontal: 0.1 * width);
        titleFontSize = 18;
        menuFontSize = 15;
        appContainerSize = appContainerSize * 1.2;
        pengaliSize = 1.2;
      case JenisScreen.LARGE || JenisScreen.EXTRA_LARGE:
        headerPadding =
            EdgeInsets.symmetric(vertical: 15, horizontal: 0.1 * width);
        titleFontSize = 20;
        menuFontSize = 18;
        appContainerSize = appContainerSize * 1.5;
        pengaliSize = 1.5;
    }

    return Scaffold(
      body: Padding(
        padding: headerPadding,
        child: Stack(
          children: [
            Column(
              children: [
                // header
                Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      GestureDetector(
                        onTap: () {
                          GoRouter.of(context).go('/');
                        },
                        child: Container(
                          decoration: BoxDecoration(
                              color: Colors.red,
                              borderRadius: BorderRadius.circular(5)),
                          padding: EdgeInsets.all(8),
                          child: Text(
                            'Aplikasi Hebat'.toUpperCase(),
                            style: GoogleFonts.aBeeZee(
                                textStyle: TextStyle(
                                    color: Colors.white,
                                    fontSize: titleFontSize,
                                    fontWeight: FontWeight.bold)),
                          ),
                        ),
                      ),
                      if (jenisScreen == JenisScreen.SMALL)
                        IconButton(
                            onPressed: () {
                              setState(() {
                                showDropDownMenu = !showDropDownMenu;
                                burgerIcon =
                                    showDropDownMenu ? Icons.close : Icons.menu;
                              });
                            },
                            icon: Icon(burgerIcon))
                      else
                        Row(
                          children: [
                            MenuItemComp('Tentang', menuFontSize, () {
                              GoRouter.of(context).go('/about');
                            }),
                            MenuItemComp('Kontak', menuFontSize, () {
                              GoRouter.of(context).go('/contact');
                            }),
                            MenuItemComp('Blog', menuFontSize, () {
                              launchUrl(Uri.parse('/blog'));
                            }),
                          ],
                        )
                    ]),
                widget.content
              ],
            ),
            if (jenisScreen == JenisScreen.SMALL && showDropDownMenu)
              Positioned(
                top: 50,
                right: 0,
                child: Container(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      MenuItemComp('Tentang', menuFontSize, () {
                        GoRouter.of(context).go('/about');
                      }),
                      MenuItemComp('Kontak', menuFontSize, () {
                        GoRouter.of(context).go('/contact');
                      }),
                      MenuItemComp('Blog', menuFontSize, () {
                        launchUrl(Uri.parse('https://aplikasihebat.com/blog'));
                      }),
                    ],
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
