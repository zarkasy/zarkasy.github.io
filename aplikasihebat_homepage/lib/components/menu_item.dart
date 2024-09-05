import 'package:aplikasihebat_homepage/components/page_template.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';

typedef MenuItemCallback = void Function()?;

class MenuItemComp extends StatefulWidget {
  final String title;
  final double fontSize;
  final MenuItemCallback callback;

  MenuItemComp(this.title, this.fontSize, this.callback);

  @override
  State<StatefulWidget> createState() {
    return _MenuItemCompState();
  }
}

class _MenuItemCompState extends State<MenuItemComp> {
  FontWeight fontWeight = FontWeight.normal;
  Color bgColor = Colors.transparent;
  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (event) {
        setState(() {
          bgColor = Colors.red;
        });
      },
      onExit: (event) {
        setState(() {
          bgColor = Colors.transparent;
        });
      },
      cursor: SystemMouseCursors.click,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10.0),
        child: GestureDetector(
          onTap: widget.callback,
          child: Container(
            padding: EdgeInsets.all(5),
            decoration: BoxDecoration(
                color: bgColor, borderRadius: BorderRadius.circular(5)),
            child: Text(
              widget.title,
              style: GoogleFonts.aBeeZee(
                  fontSize: widget.fontSize, fontWeight: fontWeight),
            ),
          ),
        ),
      ),
    );
  }
}
