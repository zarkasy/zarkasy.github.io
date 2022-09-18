---
title: "Django plus Vue dan Vite"
date: 2022-09-14T21:13:52+07:00
draft: false
---
## Django, Vue JS dan Vite JS
Django merupakan web framework terpopuler berbasis python, sedangkan VueJS juga merupakan salah satu Javascript Framework terpopuler. Django memiliki kelebihan di kemudahan dan kelengkapan librarinya yang memberikan kecepatan bagi developer untuk menciptakan suatu produk, sedangkan VueJs dikenal sebagai solusi SPA (*Single Page Application*) yang memiliki susunan sintaks yang rapih dan mudah dimengerti. Jika django memberikan kemudahan bagi kita membangun aplikasi web yang bersifat tradisional dimana biasanya aplikasi web yang dibangun terdiri dari kumpulan berbagai jenis halaman, seperti halaman login, home, konten, admin dsb, sedangkan VueJS sendiri memiliki kekuatan dalam pembangunan *SPA* dimana biasanya aplikasi jenis ini memiliki mekanisme yang kompleks yang ditampilkan di satu halaman saja, contohnya User Interface Facebook dimana didalamnya terjadi banyak aktifitas mulai dari pengambilan konten terbaru, memunculkan notifikasi, chat, dan teman yang sedang online sekarang, dan semuanya terjadi secara *real time*. Tapi apakah bisa kedua framework ini digabungkan misalkan kamu ingin membuat suatu aplikasi Video Editing dimana ada halaman-halaman yang bersifat sederhana seperti halaman *home*, login, dashboard dsb, dan ada halaman yang bersifat kompleks yaitu halaman yang memuat fitur untuk editing video itu sendiri. Jawabannya adalah bisa, disini akan saya uraikan cara untuk melakukannya ditambah dengan penggunaan Vite JS sebagai bundler yang memiliki fitur terbaru yaitu *Hot Module Replacement* dimana perubahan kode pada aplikasi Vue yang sedang berjalan, langsung dapat dilihat perubahannya pada browser.

## Struktur Aplikasi Django dan Vue JS
![skema django app dengan vue app](/gambar1.png)

Disini aku berasumsi kalian sudah familiar dengan django dan cara untuk membuat project django kemudan membuat django app. Namun jika belum kalian dapat melihat tutorial awal pembuatan project django [disini](https://docs.djangoproject.com/en/4.1/intro/tutorial01/). Yang perlu dipahami disini, maksud dari membuar project django adalah menginstall library django menggunakan command prompt/shell kemudian menggunakan *syntaks* django yaitu **django-admin** untuk mengenerate project dan aplikasi django. Jika kalian belum mengerti perbedaan antara apa itu project dan apa itu aplikasi django, secara singkat yaitu project django adalah rumah dari aplikasi-aplikasi django, satu project django bisa memuat satu atau lebih aplikasi django. Mungkin jika kalian masih belum jelas dengan penjelasanku bisa mempelajari dulu tutorial di link yang sudah kucantumkan diatas. Lanjut lagi ke cara menyatukan aplikasi vue ke dalam aplikasi django. Di atas terdapat gambar dari skema hubungan antara django dengan vue. Dapat dilihat sebenarnya aplikasi vue itu sendiri menumpang pada salah satu halaman yang di*serve* oleh aplikasi django, dimana jika kalian tau biasanya aplikasi vue itu di*mounting* pada satu element html, biasanya pada suatu *div*. Untuk lebih detailnya langkah yang harus kalian lakukan adalah pertama membuat project dan aplikasi django sebagai berikut.

```python
# create Projek Django lewat command prompt
django-admin startproject videoeditor
cd videoeditor
# crate django app dengan nama app
python manage.py startapp app
```
Dari langkah diatas akan tergenerate struktur project dan aplikasi django. Kalian dapat membuat project ini pada direktori mana saja melalui *command prompt/shell*. Setelah langkah diatas kira-kira kalian akan memmperoleh struktur aplikasi django yang seperti berikut:
```html
videoeditor/
    app/
    videoeditor/
    manage.py
    settings.py
```
Langkah selanjutnya adalah membuat Vue app, disini aku asumsikan kalian sudah menginstall **node.js** dan menginstall library **vue**. Jika belum kalian bisa merujuk pada link [disini](https://vuejs.org/guide/quick-start.html#creating-a-vue-application). Masih di parent folder yaitu **videoeditor**, kita lakukan langkah-langkah berikut:
```javascript
// pada folder videoeditor
npm init vue@latest
// ikuti langkah pembuatan project yang muncul
// misalkan untuk vue app kita beri nama app_js
cd app_js
npm install
```
Setelah langkah diatas dilakukan maka kita akan mememiliki struktur aplikasi django yang didalamnya terdapat juga folder aplikasi vue. Struktur yang telah dibuat kira-kira akan seperti ini:
```python
videoeditor/
    app/
    videoeditor/
    # vue app
    app_js/
    manage.py
    settings.py
```
## Menghubungkan Vue app ke Django app
Disini kita telah membuat dua struktur aplikasi yaitu django dan vue, namun keduanya belum terhubung. Django app nantinya yang akan berperan sebagi aplikasi induk yang akan memuat vue app, hanya mengingatkan kembali bahwa diawal tadi kita ingin membuat aplikasi video editor dimana untuk halaman-halaman yang bersifat sederhana akan di *serve* oleh django, sedangkan fitur/halaman utama yaitu halaman video editor akan menggunakan vue app. Untuk melakukannya yang kita lakukan pertama adalah membuat views, mengisi **urls.py** pada folder **app**, dan membuat file **index.html** yang nanti akan memuat aplikasi vue dan di serve oleh django.
```python
videoeditor/
    app/
        models.py
        views.py
        # buat file baru yaitu urls.py
        urls.py
        # buat folder templates untuk memuat aplikasi vue js
        templates/
            app/
                index.html
    videoeditor/
    # vue app
    app_js/
    manage.py
    settings.py
```
Seperti dasar pada pembuatan aplikasi django, kita biasanya memulainya dengan membuat View, view disini adalah suatu fungsi/Class yang memeiliki fungsi untuk menerima request yang masuk dan memberikan response terhadap request tersebut. Misalkan pada url **www.example.com/vue/** kita membuat Class View bernama **_VueView_**, dimana didalam class ini kita hanya akan mengembalikan *index.html* yang terlah dimounting aplikasi vue.
```python
# pada file views.py
class VueView(TemplateView):
    template_name = 'app/index.html'
```
```python
# pada file urls.py
urlpatters = [
    path('vue/', VueView.as_view(), name="vue_view")
]
```
Jika kita telah melakukan hal ini, maka vue app akan ada pada halaman index.html yang disajikan oleh django. 