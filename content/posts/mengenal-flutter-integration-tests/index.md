---
title: "Mengenal Flutter Integration Tests"
date: 2024-11-05T20:55:39+07:00
draft: false
---

Salah satu aspek penting dalam pengembangan aplikasi adalah _testing_/pengetesan. Semakin banyak pengetesan dilakukan maka tingkat kepercayaan kita semakin tinggi saat akan me-_release_ aplikasi tersebut. Hampir disemua bahasa pemrograman menyediakan library untuk _testing_, begitu juga di _Flutter_. Disini aku akan menulis tentang _Integration Testing_ di _Flutter_.

_Integration Testing_ adalah pengetesan secara menyeluruh alur aplikasi kita dari awal hingga akhir, dengan pengetesan ini _confidence_ kita besar terhadap aplikasi kita karena kita yakin bahwa alur aplikasi kita berjalan dari awal hingga akhir. Sedikit cerita sebelumnya, [aplikasiku](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app) yang berjudul _Belajar membaca tanpa mengeja_ yang juga dikembangkan dengan _Flutter_ saat ini berada pada titik dimana aplikasi ini menjadi terlalu besar untuk dites secara manual. Saat ini aplikasi tersebut sudah memiliki sembilan belas menu pembelajaran dan permaianan, dan dengan update yang terus kulakukan akan sangat melelahkan jika tidak ada testing secara otomatis yang kubuat. Karena itu _Integration Test_ di _Flutter_ menjadi opsi yang sangat tepat untuk permasalahan ini.

# Skenario Integration Testing dalam aplikasiku

Baru-baru ini aku merubah alur request review didalam aplikasiku, jika sebelumnya permintaan review akan muncul diawal aplikasi dibuka, sekarang skenarionya menjadi agak rumit. Skenarionya adalah seperti ini:

1. Aplikasi harus sudah digunakan minimal 5 kali, dan
2. Aplikasi harus sudah digunakan minimal 5 menit, dan
3. Aplikasi belum pernah dimunculkan dialog permintaan review.

Terlihat sederhana dari kondisi yang kutetapkan diatas, tapi perlu diingat bahwa aksi request review ini sangat "_mahal_", karena dibatasi kuota oleh Google, bayangkan jika salah dalam implementasi maka akibatnya bisa jadi aplikasi kita tidak ada yang memberi penilaian dan review. Untuk itu testing secara teliti sangat diperlukan untuk alur-alur penting dalam aplikasi.

# Cara Integration Testing

Untuk melakukan testing ini ada beberapa step yang perlu dilakukan yaitu:

1. Menambahkan _integration_test_ dan _flutter_test_ package sebagai dependencies.

```
flutter pub add 'dev:integration_test:{"sdk":"flutter"}'
```

2. Membuat folder integration test dalam aplikasi

```
folder_aplikasi/
  lib/
    main.dart
  integration_test/
    app_test.dart
```

3. Menuliskan klausa test pada file testing kita. Pada kasus ini nama file testing kita adalah _app_test.dart_.

```dart
void main() async {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  group(
    'In app review test',
    () {
      testWidgets(
          "Test dibuka kurang dari lima kali tidak mentrigger in app review",
          (tester) async {
        await Firebase.initializeApp();
        await tester.pumpWidget(MyApp());
        await tester.pump(Duration(seconds: 4));
        // test belajar membaca
      });
      testWidgets(
          "Test dibuka lima kali tapi durasi belum mencukupi tidak membuka in app review",
          (tester) async {
        await Firebase.initializeApp();

        SharedPreferences prefs = await SharedPreferences.getInstance();

        await tester.pumpWidget(MyApp());
        prefs.setInt(jumlahUserMembukaAppKey, 5);
        await tester.tap(find.widgetWithImage(Container,
            const AssetImage("assets/images/logo_menu/belajar_alphabets.png")));
        await tester.pumpAndSettle();
        await tester.pump(Duration(seconds: 2));
        await tester.tap(find.widgetWithIcon(Container, Icons.home));
        await tester.pumpAndSettle();
      });
      testWidgets("Test dibuka lima kali dan durasi mencukupi", (tester) async {
        await Firebase.initializeApp();

        SharedPreferences prefs = await SharedPreferences.getInstance();

        await tester.pumpWidget(MyApp());
        await prefs.setInt(jumlahUserMembukaAppKey, 5);
        await prefs.setString(userStartTimeUsingApp,
            DateTime.now().subtract(const Duration(minutes: 6)).toString());
        // test belajar membaca
        await tester.tap(find.widgetWithImage(Container,
            const AssetImage("assets/images/logo_menu/belajar_alphabets.png")));
        await tester.pumpAndSettle();
        await tester.pump(Duration(seconds: 2));
        await tester.tap(find.widgetWithIcon(Container, Icons.home));
        await tester.pumpAndSettle();
        await tester.pump(Duration(seconds: 2));

        bool hasRequestedInAppReview = await checkAppHasRequestedInAppReview();
        expect(hasRequestedInAppReview, true,
            reason: "In app review has requested");
      });
      testWidgets("Test dibuka sepuluh kali dan durasi mencukupi",
          (tester) async {
        await Firebase.initializeApp();

        SharedPreferences prefs = await SharedPreferences.getInstance();

        await tester.pumpWidget(MyApp());
        await prefs.setInt(jumlahUserMembukaAppKey, 5);
        await prefs.setString(userStartTimeUsingApp,
            DateTime.now().subtract(const Duration(minutes: 6)).toString());
        // test belajar membaca
        await tester.tap(find.widgetWithImage(Container,
            const AssetImage("assets/images/logo_menu/belajar_alphabets.png")));
        await tester.pumpAndSettle();
        await tester.pump(Duration(seconds: 2));
        await tester.tap(find.widgetWithIcon(Container, Icons.home));
        await tester.pumpAndSettle();
        await tester.pump(Duration(seconds: 2));

        bool hasRequestedInAppReview =
            prefs.getBool(appHasRequestedInAppReview)!;
        expect(hasRequestedInAppReview, true,
            reason: "In app review has requested");
      });
      testWidgets("Test dibuka sepuluh kali sudah pernah request in app",
          (tester) async {
        await Firebase.initializeApp();

        SharedPreferences prefs = await SharedPreferences.getInstance();

        await tester.pumpWidget(MyApp());
        await prefs.setInt(jumlahUserMembukaAppKey, 5);
        await prefs.setString(userStartTimeUsingApp,
            DateTime.now().subtract(const Duration(minutes: 6)).toString());
        await prefs.setBool(appHasRequestedInAppReview, true);
        // test belajar membaca
        await tester.tap(find.widgetWithImage(Container,
            const AssetImage("assets/images/logo_menu/belajar_alphabets.png")));
        await tester.pumpAndSettle();
        await tester.pump(Duration(seconds: 2));
        await tester.tap(find.widgetWithIcon(Container, Icons.home));
        await tester.pumpAndSettle();
        await tester.pump(Duration(seconds: 2));
      });
    },
  );
}
```

Pada snippet kode diatas ada beberapa point penting yang bisa dilihat yaitu:

1. Fungsi _group_ bertujuan untuk menggabungkan beberapa test sejenis menjadi satu-kesatuan.
2. Fungsi _testWidgets_ berfungsi untuk mensimulasikan alur User Interface pada aplikasi kita. Bisa dilihat pada test bagian "_await tester.pumpWidget(MyApp())_" yang akan terjadi adalah device simulator kita akan membuka aplikasi kita.
3. Fungsi _tester.tap_ berfungsi untuk menjalankan aksi pada User Interface, dalam kasus ini mensimulasikan tap pada salah satu bagian di aplikasi.
4. Fungsi _expect_ bersungsi untuk menguji asumsi dari jalannya aplikasi kita, pada testing diatas salah satu ekspektasi yang kuharap adalah ketika aplikasi telah dibuka sebanyak lima kali maka aplikasi akan menyimpan informasi bahwa telah dilakukan in app review, sehingga pada pembukaan aplikasi selanjutnya tidak akan dilakukan permintaan review lagi ke user.

Sekian semoga dapat dimengerti.
