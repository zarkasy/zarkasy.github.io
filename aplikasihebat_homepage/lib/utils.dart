import 'package:aplikasihebat_homepage/breakoutes.dart';
import 'package:flutter/material.dart';

enum JenisScreen { SMALL, MEDIUM, LARGE, EXTRA_LARGE }

JenisScreen getJenisScreen(BuildContext context) {
  final width = MediaQuery.of(context).size.width;

  if (width < SM) {
    return JenisScreen.SMALL;
  }
  if (width > SM && width < MD) {
    return JenisScreen.MEDIUM;
  }
  if (width > MD && width < LG) {
    return JenisScreen.LARGE;
  }
  return JenisScreen.EXTRA_LARGE;
}
