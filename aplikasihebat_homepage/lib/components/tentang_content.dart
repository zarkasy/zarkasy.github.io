import 'package:flutter/material.dart';

class TentangContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          height: 50,
        ),
        Text(
          "Kami adalah pengembang aplikasi yang berfokus pada pengembangan aplikasi edukasi.",
          style: TextStyle(fontSize: 20),
        ),
      ],
    );
  }
}
