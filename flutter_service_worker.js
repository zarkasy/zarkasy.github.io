'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "1dcb14687ef025bbfbf05525f3b6d1bd",
"assets/assets/images/logo.png": "17290c0ad0562d2e492ca5d8e3be8e4a",
"assets/assets/images/googleplay.png": "468ef7f576ce6cfef78231938349ab0b",
"assets/AssetManifest.bin.json": "7da7ceb9e51749d78bbe3bdcfd2a325e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b2b46d75e71eac076de5ee6b49b45a58",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "1eb1313b7f49abee0d98f4808ea4c2cb",
"assets/fonts/MaterialIcons-Regular.otf": "3f77e73f5fbe1eac40a1d20346577e7b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"main.dart.js": "d79f85408dc4e8bdde0b27706a9906b1",
"blog/release_history.PNG": "7e7fb8e0330cb71f8ca538f94765c9d7",
"blog/audioplayer_bugs.PNG": "fac06f5efa9a979a72cbdfedc4c5abe2",
"blog/404.html": "d8a85f1e1096ce3b9659d1a112f414e3",
"blog/page/1/index.html": "18539c1a936b6f9d2a32278123be4be6",
"blog/page/2/index.html": "22762f81d058128b84391c620e851cf8",
"blog/page/3/index.html": "39560b094a166dd882f1a9c04d963b01",
"blog/belajar-membaca-tanpa-mengeja/privacy-policy.txt": "c40963c54ecf4235b2622addd474277a",
"blog/assets/css/stylesheet.fc220c15db4aef0318bbf30adc45d33d4d7c88deff3238b23eb255afdc472ca6.css": "af66139028094c8690fd3e300b448403",
"blog/sitemap.xml": "161e2653b549b2a1ad58f1512b10b0c9",
"blog/categories/index.xml": "293e6a6a1aea7e5887a605e6b65d547a",
"blog/categories/index.html": "0db0caab5a9bfc5575a3555c90cf0797",
"blog/admob_limit.PNG": "21852b78121e7c7a96df8814d2fcaf0a",
"blog/app_rejected2.PNG": "b57a1877533f7f4a2db49d55e46a3e29",
"blog/app_rejected.PNG": "67ca3697192225e05b75ddcc5fdcb8ed",
"blog/old_privacy.png": "df317453fa7ad192bdabe37f1060783d",
"blog/posts/three_days_holidays_recap/index.html": "a999834c3d073778a4f9486c57c3f126",
"blog/posts/page/1/index.html": "ea9a15d727111de26b7bad040276cca2",
"blog/posts/page/2/index.html": "a7c11947c30cd1ca5f71c386ca0bc5f5",
"blog/posts/page/3/index.html": "26a95f65e00654ccf388779a842ab79e",
"blog/posts/pengalaman-transjakarta/index.html": "e6e2338446a84e80fde0f80752ec302c",
"blog/posts/menjaga-kewarasan-sebagai-pengemudi/index.html": "c645e84f7f91f734495cd8623ed9bd4c",
"blog/posts/django_plus_vue_dan_vite/index.html": "afcf58eaf1459d180aba50cdba9a67cc",
"blog/posts/bugs-in-audioplayers-package/audioplayer_bugs.PNG": "fac06f5efa9a979a72cbdfedc4c5abe2",
"blog/posts/bugs-in-audioplayers-package/index.html": "fb2a38260708658a0d2ddcbfca66d0cd",
"blog/posts/memperbaiki-error-akses-gambar-asset-pada-hugo/index.html": "03ed55ef29894cd1716feac46705e625",
"blog/posts/catatan_tentang_pyinstaller/index.html": "4dff7e526221f9dbcaff79bf4b7f4fa3",
"blog/posts/antara-impian-syukur-dan-ikhtiar/index.html": "656c9fab822417baf38a9888e3f3f156",
"blog/posts/cara-deploy-flutter-web-dan-hugo-di-github-pages/index.html": "42cb67113883db8e113cf983bb43a113",
"blog/posts/blog-gratisan-dengan-github-pages/index.html": "29073fb28ea4bd010ae98d4ce856215b",
"blog/posts/index.xml": "dc6b438313853532f4fc2eb17bad9411",
"blog/posts/index.html": "5beea0ebac849564431e2aa1f201384e",
"blog/posts/first-post/index.html": "34eff0c2c90fc7d2ffbe97088f89fe04",
"blog/posts/pengalaman-update-app-google-play-ditolak/index.html": "45790a25f5bcdea2b2f7416a6d23ba8c",
"blog/posts/pengalaman-kena-limit-ad-serving-admob/index.html": "fe12b69d4e5a51552d943133ce8d6de7",
"blog/ad_match_rate.PNG": "387bf3a1636b8140b07bff11d1d4578f",
"blog/ad_request.PNG": "dffeb942a8d183619b76bcda52ae1584",
"blog/index.xml": "611521afcfa0b244431c3fe16c5e8757",
"blog/app-ads.txt": "30d7d2a21d13216b2d2a65db407d995f",
"blog/index.html": "f0877b2e8b1bd43987cc6ae7eaa48f4e",
"blog/tags/transjakarta/page/1/index.html": "88f65526d11cc795150feab43264557f",
"blog/tags/transjakarta/index.xml": "02aba14eae5a5524112562b6b8bc5982",
"blog/tags/transjakarta/index.html": "10721ae7aed6a4b685061b5b0839d10e",
"blog/tags/gratis/page/1/index.html": "c853fc589a03360362a358bf1a989c92",
"blog/tags/gratis/index.xml": "b8f5d41b5e46f8fc0538c9d31d372680",
"blog/tags/gratis/index.html": "c9992b2fd039b4a90e750fe1a2b4df70",
"blog/tags/blog/page/1/index.html": "a34e3a00fd96619176046ec7ca0396cf",
"blog/tags/blog/index.xml": "87e610cbc0a9ad6bab40a582f0dc3570",
"blog/tags/blog/index.html": "335f709aaae7ef8b167a62e3f7387c1f",
"blog/tags/mrt/page/1/index.html": "083fe03da0b15d7ff2983b6e3136170c",
"blog/tags/mrt/index.xml": "38c006166677e266bf71e562b436db89",
"blog/tags/mrt/index.html": "ef096f039b2d26886793d87a39f0115f",
"blog/tags/pikiran/page/1/index.html": "c3c79e4889edb3bc18133b5b638da440",
"blog/tags/pikiran/index.xml": "192f54c73551f3fc809ac4fea8b7bd35",
"blog/tags/pikiran/index.html": "0bc1b8f93bb8afcbbdf02e30560ba3f0",
"blog/tags/index.xml": "7a0d2fa20a45c924e68e3a0acb930fa7",
"blog/tags/index.html": "ca34fd8295bd6ebbcd93e7e6c2a4ec9e",
"blog/gambar1.png": "ae2bead9fc1b7f68fded9fc62aa46550",
"blog/CNAME": "1692fb68df06442bf8eacaae9475f47c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutter_bootstrap.js": "1d432f097d44520e857cd76a9a0ede06",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"index.html": "da14b4cef87cc762a437ef8d5b3e9edb",
"/": "da14b4cef87cc762a437ef8d5b3e9edb",
"version.json": "6302f4bfadafe063398cab2ae6ba0871",
"manifest.json": "7a581b0d1e5465d7ef8e39c23bf24e54"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
