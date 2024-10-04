---
title: "Pengalaman Kena Limit Ad Serving Admob"
date: 2024-08-29T12:57:47+07:00
draft: false
---

Tulisan ini kubuat untuk catatan pribadiku jika kedepannya hal ini terjadi lagi. Sedikit cerita kalau aplikasiku yaitu game edukasi yang berjudul [Belajar membaca tanpa mengeja](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app&pcampaignid=web_share) pada tanggal 5 Agustus 2024 tiba-tiba saja mendapat notifikasi dari [Admob](https://admob.google.com/home/) kalau iklan yang ditampilkan pada aplikasiku kena limit. Buat yang belum tau apa itu **Admob** Jujur awal membaca email pemeberitahuan tersebut cukup kaget dan bertanya-tanya pelanggaran apa yang kubuat sehingga bisa sampai kena limit. Jadi buat teman-teman yang belum tahu apa itu Admob, dia semacam Iklan Provider dimana kita bisa menampilkan iklan dari mereka dan mendapatkan uang dari iklan yang muncul pada aplikasi kita, semacam [Google Adsense](https://adsense.google.com/intl/id_id/start/) tapi khusus untuk aplikasi saja, cuma tetep punya google juga.

![Email notifikasi dari Admob](admob_limit.PNG)

Setelah menerima email tersebut, coba kucari penyebabnya by searching internet siapa tau ada yang punya pengalaman yang sama, dan benar saja ternyata ketemu beberapa yang sharing pengalaman mengapa mereka kena limit dan solusi yang mereka gunakan. Hanya saja, dari informasi yang kudapat dari internet, dari notifikasi yang mereka dapatkan, terdapat penjelasan tentang kenapa mereka kena limit, namun dari email yang kudapat tidak ada penjelasan sama sekali namun satu hal yang kucurigai adalah kualitas traffic Ads dari aplikasiku mereka curigai.

![Ad request dari aplikasiku](/ad_request.PNG)

Jika dilihat dari tanggal 28 Juli 2024, jumlah Ad request dari aplikasi melonjak tajam dari 12 ribu request perhari menjadi hingga puncaknya yaitu 83 ribu request perhari. Sepertinya hal ini lah yang menyebabkan aplikasiku kena limit. Dan memang benar saja setelah kucoba telusuri lebih lanjut, pada tanggal 11 Juli memang aku baru mengupdate versi aplikasi pada playstore dan tentu saja ada beberapa perubahan pada implementasi pemunculan Ads didalamnya. Dari titik ini setelah perubahan implementasi tersebut yang membuat jumlah request iklan melonjak tajam.

![Tanggal rilis aplikasi](/release_history.PNG)

Berangkat dari informasi tersebut dan dengan semakin turunnya pendapatan dari Ads karena limitasi tersebut aku mencoba untuk menilik ulang implementasi dari pemunculan Ads pada aplikasi. Sehingga kubuat beberapa perubahan dimana Ads request hanya akan dilakukan setiap lima menit sekali. Perubahan ini kubuat pada rilis ke 42 yaitu pada tanggal 15 Agustus 2024. Dan semenjak rilis tersebut jumlah Ad request menurun drastis namun limitasi dari Admob diangkat sehingga pendapatan dari iklan normal kembali.
