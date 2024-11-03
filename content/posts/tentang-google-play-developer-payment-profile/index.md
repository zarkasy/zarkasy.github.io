---
title: "Tentang Google Play Developer Payment Profile"
date: 2024-11-03T05:27:04+07:00
draft: false
---

Kemarin menjadi milestone dari perjalananku dalam mengembangkan [aplikasiku](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app) dimana aku mendapatkan notifikasi dari [Google](https://play.google.com/console/) bahwa aku perlu mengupdate payment profile milikku. Payment profile atau profil pembayaran ini diperlukan jika kalian adalah developer yang memonetisasi aplikasi kalian di [Play Store](https://play.google.com/) untuk menerima pembayaran dari pendapatan aplikasi kalian setelah batas pembayaran minimal terlampaui.

![paypent profile google](/blog/posts/tentang-google-play-developer-payment-profile/payment_profile.png)

Sebelumnya pada halaman Play Console punyaku terdapat notifikasi bahwa aku perlu mengupdate payment profileku, dengan tulisan warna merah. Sebenarnya cukup gugup aku dibuat setelah menerima pemberitahuan ini, bagaimana tidak karena hal ini berhubungan dengan pembaharuan informasi mengenai pajak. Bukan karena aku tidak mau membayar pajak, tapi khawatir aku tidak mengisi informasi dengan benar yang menyebabkan kegagalan penarikan uang dari fund kita.

![tax info](/blog/posts/tentang-google-play-developer-payment-profile/tax_info.png)

Setelah meng-klik tombol **Update Payment**, akan muncul beberapa opsi negara yang bisa kita pilih, ada Singapore, Taiwan, dan United States. Disini aku sempat bingung kenapa nama Indonesia tidak muncul, dan dimana aku harus mengupdate payment profileku. Setelah sedikit mencari-cari akhirnya aku tahu bahwa untuk developer non-US, selain yang berdomisili di Taiwan dan Singapore, kita bisa pilih saja United States.

![tax info detail](/blog/posts/tentang-google-play-developer-payment-profile/tax_info_detail.png)

Setelah itu kita akan diberi pilihan dua jenis form pajak, pilih **W-8Ben** jika kamu adalah individual developer dan bukan corporate. Setelah itu kita akan diminta untuk mengisi alamat, alamat pengiriman, dan salah satu pertanyaan terpenting adalah mengisi detail witholding rates. Withholding rates adalah penahanan sebagian pengahasilan kita oleh pemerintah Amerika Serikat jika negara kita berasal tidak memiliki perjanjian pajak dengan mereka, dan untungnya Indonesia memiliki perjanjian pajak dengan US. Untuk pertanyaan ini kamu bisa memilih jenis barang apa yang kamu jual, dan aku memilih opsi Service WHT dimana dengan opsi ini aku tidak dikenakan pajak sama-sekali di US, atau 0% witholding rates.

Satu hal lagi yang kuingat adalah kalian perlu mengisikan nomor Nomor Pokok Wajib Pajak (NPWP) pada field **Foreign TIN**. Setelah mengisi semua baris isian pada form pajak ini aku mensubmitnya, dan cukup instant form pajakku langsung diterima.

\_
