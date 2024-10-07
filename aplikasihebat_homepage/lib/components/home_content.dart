import 'package:aplikasihebat_homepage/utils.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:url_launcher/url_launcher.dart';

class HomeContent extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _HomeContentState();
  }
}

class _HomeContentState extends State<HomeContent> {
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
    return Column(
      children: [
        SizedBox(
          height: 50,
        ),
        Text(
          "Yuk Bermain dan Belajar",
          style: GoogleFonts.playpenSans(
              fontSize: titleFontSize * 2,
              color: Colors.red,
              fontWeight: FontWeight.bold),
        ),
        SizedBox(
          height: 50,
        ),
        Container(
          width: appContainerSize,
          height: appContainerSize,
          padding: EdgeInsets.all(5),
          decoration: BoxDecoration(
              color: Colors.yellow.shade500,
              boxShadow: [
                BoxShadow(
                    color: Colors.grey, offset: Offset(2, 2), blurRadius: 3)
              ],
              borderRadius: BorderRadius.circular(20)),
          child: ClipRRect(
              borderRadius: BorderRadius.circular(20),
              child: Image.asset('assets/images/logo.png')),
        ),
        SizedBox(
          height: 10,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "4.8",
              style: TextStyle(fontSize: 15 * pengaliSize),
            ),
            Icon(
              Icons.star,
              color: Colors.amber,
              size: 15 * pengaliSize,
            ),
            SizedBox(
              width: 10,
            ),
            Text(
              '10K+ Downloads',
              style: TextStyle(fontSize: 15 * pengaliSize),
            )
          ],
        ),
        SizedBox(
          height: 10,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            MouseRegion(
              cursor: SystemMouseCursors.click,
              child: GestureDetector(
                onTap: () {
                  launchUrl(Uri.parse(
                      'https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app&pcampaignid=web_share'));
                },
                child: Container(
                  height: 50 * pengaliSize,
                  child: Image.asset('assets/images/googleplay.png'),
                ),
              ),
            ),
            if (jenisScreen != JenisScreen.SMALL) ...[
              SizedBox(
                width: 10,
              ),
              MouseRegion(
                cursor: SystemMouseCursors.click,
                child: GestureDetector(
                  onTap: () {
                    launchUrl(Uri.parse('/belajar-baca/'));
                  },
                  child: Container(
                    height: 50 * pengaliSize,
                    width: 150 * pengaliSize,
                    decoration: BoxDecoration(
                        color: Colors.red,
                        boxShadow: [
                          BoxShadow(color: Colors.amber, offset: Offset(2, 2))
                        ],
                        borderRadius: BorderRadius.circular(10)),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(
                          Icons.play_arrow,
                          color: Colors.white,
                          size: 40 * pengaliSize,
                        ),
                        SizedBox(
                          width: 5,
                        ),
                        Text(
                          'Play'.toUpperCase(),
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20 * pengaliSize,
                              fontWeight: FontWeight.bold),
                        )
                      ],
                    ),
                  ),
                ),
              )
            ]
          ],
        )
      ],
    );
  }
}
