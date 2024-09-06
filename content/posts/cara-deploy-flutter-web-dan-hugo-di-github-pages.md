---
title: "Cara Deploy Flutter Web dan Hugo di Github Pages"
date: 2024-09-06T21:31:27+07:00
draft: false
---

Sekitar seminggu terakhir [Aplikasi Hebat](https://aplikasihebat.com) sedang merombak homepagenya yang sebelumnya hanya berisi blog, sekarang sudah ditambahkan landing page, walapun masih seadanya. Pada [tulisan sebelumnya](https://aplikasihebat.com/blog/posts/blog-gratisan-dengan-github-pages/) kujelaskan bagaimana website ini dihosting secara gratis pada [Github Pages](https://pages.github.com/). Website ini sebelumnya hanya menggunakan [Hugo](https://gohugo.io/) untuk menggenerate file static yang akan dihosting, namun sekarang karena ada tambahan landing page dimana aku menggunakan [Flutter Web](https://flutter.dev/) untuk membuatnya.

Sedikit aku ingin bercerita, sekitar setahun yang lalu aku mempublish aplikasi pertamaku di Google Playstore yang berjudul [Belajar Membaca Tanpa Mengeja](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app), yaitu aplikasi edukasi anak dimana didalamnya sekarang sudah ada tujuh belas game pembelajaran. Sekarang aplikasiku sudah didownload lebih dari 10 ribu kali dan mendapatkan 40 reviuw dari pengguna.

Kembali lagi ke topik utama yaitu bagaimana aku bisa mempublish aplikasi yang didevelop dengan Flutter di github pages secara cuma-cuma. Flutter sendiri merupakan framework baru dari Google untuk mengembangkan aplikasi multiplatform, dengan flutter kamu bisa membuat aplikasi Android, IOS, Desktop dan Web dengan satu source code saja, cukup efisien. Karena alasan itulah aku mencoba untuk membuat homepage dari Aplikasi Hebat menggunakan Flutter.

## Prinsip Hosting di Github Pages

Sebenarnya untuk menghosting websitemu di Github Pages yang kamu butuhkan adalah file static berupa html beserta asset-asset yang lain seperti css dan javascript. Secara umum struktur direktori pada Github Pages adalah seperti ini

```
parent_folder/
    css/
    javascript/
    index.html
```

Bisa dilihat bahwa prinsip hosting di Github Pages adalah dengan cara mempublish file static websitemu. Index.html adalah pintu utama dimana websitemu dapat diakses oleh dunia luar. Seperti itu juga websiteku ini dihosting pada Github, namun ada sedikit trik tambahan dimana terdapat dua jenis file static yang kugunakan, yang pertama adalah file static **Blog** yang dihasilkan dari Hugo, dan yang kedua adalah file static yang dihasilkan dari Flutter. Sehingga secara sederhana sekarang struktur file untuk websiteku adalah seperti ini.

```
parent_folder/
    css/
    javascript/
    index.html
    blog/
        css/
        javscript/
        index.html
```

Jika dulu file index.html adalah halaman utama dari blogku, sekarang blogku kupindah kedalam subfolder yang bernama **blog** dan pada parent folder sekarang berisi file yang digenerate dari Flutter yang merupakan landing page yang sekarang. Dengan cara seperti ini aku bisa mempublish dua jenis aplikasi pada satu domain pada Github Pages.

Struktur seperti ini sangat scalable, tidak hanya terbatas pada Hugo atau Flutter saja, kalian dapat mempublish aplikasi lain kalian entahkan itu dari framework javascript atau yang lain asalkan bentuk file yang dihasilkan adalah file static berupa html, css, dan javascript, kalian dapat meng-hosting website kalian secara cuma-cuma pada Github. Misalkan kalian punya project lain lagi, cukup tambahkan subfolder lagi pada parent folder dan project baru kalian akan online dan dapat diakses pada dunia luar.
