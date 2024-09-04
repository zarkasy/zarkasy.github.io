import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class MenuItemComp extends StatefulWidget {
  final String title;
  final double fontSize;

  MenuItemComp(this.title, this.fontSize);

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
          onTap: () => print("Tapped"),
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
