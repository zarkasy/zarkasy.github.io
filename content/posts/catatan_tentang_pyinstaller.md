---
title: "Catatan Tentang Pyinstaller"
date: 2024-05-18T06:30:46+07:00
draft: false
---

## Tentang [Pyinstaller](https://pyinstaller.org/en/stable/)
Pyinstaller adalah sebuah aplikasi yang ditulis dengan bahasa pemogramman python untuk membuat/memaketkan software yang telah kita tulis dalam bahas python juga ke bentuk exe. Dengan aplikasi ini kita bisa melakukan bundle terhadap aplikasi-aplikasi web yang dibuat dengan framework Django atau Flask, begitupun juga aplikasi desktop dengan GUI tkninter atau yang lainnya menjadi satu bundle file exe atau bentuk satu folder.

## [Auto-py-to-exe](https://pypi.org/project/auto-py-to-exe/)
Jika untuk menggunakan pyinstaller kita harus menuliskan script spesifikasi bundle kita, maka ada library yang mempermudah dalam hal bundling file exe kita yaitu auto-py-to-exe. Library ini adalah wrapper dari pyinstaller dimana kita diberikan fasilitasi GUI (Graphical User Interface) untuk melakukan bundling aplikasi kita, sehingga prosesnya bisa lebih mudah.

## Catatan-catatan tentang Auto-py-to-exe
Dari pengalaman menggunakan python 3.8.9 dan python 3.11.9 saya menemukan bahwa auto-py-to-exe dapat menemukan library-library yang dibutuhkan secara ototomatis pada python versi 3.8.9. Kasus ini ditemukan saat bundling menggunakan OS windows, tapi belum dicoba untuk OS yang lainnnya. Salah satu dugaaan penyebab dari hal ini adalah, dalam instalasi python 3.8.9, package **virtualenv** terinstall didalam folder yang sama dengan package **python** biasanya pada Program Files/Python/, sedangan pada python versi terbaru package **virtualenv** lokasi penyimpanannya pada folder temp user. Jadi untuk sekarang lebih baik menggunakan python versi yang lama jika akan melakukan bundling exe dengan auto-py-to-exe ini, karena jika menggunakan python versi terbaru akan ditemukan masalah dimana kita harus mengimport package-package yang tidak ditemukan secara manual.
