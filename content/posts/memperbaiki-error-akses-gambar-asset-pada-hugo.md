---
title: "Memperbaiki Error Akses Asset Gambar pada Hugo"
date: 2024-10-04T19:35:37+07:00
draft: false
---

Memang nyaman sekali jika bisa meng-hosting blog kita secara gratis, seperti blogku ini yang dihosting di [Github Pages](https://pages.github.com/) dengan menggunakan [Hugo](https://gohugo.io/) sehingga diriku ga perlu memikirkan biaya langganan server bulanan, hha. Sebelumnya aku pernah punya pengalaman menghosting websiteku secara berbayar, namun melihat dari tipe websiteku ini yang bersifat halaman statis maka aku coba berpikir ulang dan merubah framework yang kugunakan. Jika sebelumnya aku memakai database untuk menyimpan tulisan-tulisanku, sekarang aku hanya membuhkan [git](https://github.com/) respositori dan beberapa file statis yang dari hugo, selesai.

Pada tulisan [sebelumnya](https://aplikasihebat.com/blog/posts/cara-deploy-flutter-web-dan-hugo-di-github-pages/) aku pernah menceritakan jika blog ku ini letak URL nya kupindah dari sebelunya di **aplikasihebat.com** menjadi **aplikasihebat.com/blog**. Semuanya sebenarnya berjalan dengan lancar namun ternyata ada sedikit masalah yaitu asset-asset gambar tidak lagi muncul atau menjadi not found ketika blogku sudah dipublish, dimana sebelumnya hal ini tidak terjadi.

## baseUrl pada config.toml Hugo

Sebetulnya cara untuk mengatur Url pada Hugo sangat simpel, cukup menambahkan setting **baseUrl** pada **config.toml**, yaitu file konfigurasi untuk Hugo dan secara otomatis semua asset-asset yang kita gunakan akan merujuk pada baseUrl tersebut. Namun anehnya asset gambar yang seharunya juga otomatis berubah ketika kucek pada halaman source blogku yang telah online masih merujuk pada url sebelunya yaitu **aplikasihebat.com**, sehingga pantas asset-asset gambarku tidak muncul semua. Solusi sekarang yang kugunakan adalah dengan menambahkan **'/blog/\[nama gambar].png'** dan akhirnya asset gambarku muncul. Sebetulnya cara ini tidak ingin kugunakan dan aku telah mencoba beberapa alternatif seperti memindah letak asset gambar didalam folder tulisan, tapi tetap tidak berhasil.

Jadi kesimpulannya jika kalian merubah letak domain dari website hugo kalian dan asset-asset gambar kalian jadi tidak muncul, tambahkan saja subdomain kalian pada path gambar pada tulisan markdown di postingan.
