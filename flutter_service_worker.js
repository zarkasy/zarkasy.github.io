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
"main.dart.js": "bbb005b8e3fd8a3422aa8685f646b3cb",
"blog/release_history.PNG": "7e7fb8e0330cb71f8ca538f94765c9d7",
"blog/audioplayer_bugs.PNG": "fac06f5efa9a979a72cbdfedc4c5abe2",
"blog/page/1/index.html": "379943ed10d0d890359f4816f6979b3c",
"blog/page/2/index.html": "a6077656a48d0ff45e5a715a761d70e4",
"blog/page/3/index.html": "3c4c6a02b9869026168c0408ba04d00b",
"blog/belajar-membaca-tanpa-mengeja/privacy-policy.txt": "c40963c54ecf4235b2622addd474277a",
"blog/sitemap.xml": "a56e363efc64d8bd3097c6107b12f994",
"blog/js/main.js": "d41d8cd98f00b204e9800998ecf8427e",
"blog/js/themetoggle.js": "fb4c893aead94ccee1f6e9fc9b8f67b0",
"blog/js/feather.min.js": "7c268eab785dd2b020a41272c1461f7b",
"blog/categories/index.xml": "76c6655692f03e509e58b2d990bade08",
"blog/categories/index.html": "69403e4bee9786258d534c57f736da32",
"blog/admob_limit.PNG": "21852b78121e7c7a96df8814d2fcaf0a",
"blog/app_rejected2.PNG": "b57a1877533f7f4a2db49d55e46a3e29",
"blog/app_rejected.PNG": "67ca3697192225e05b75ddcc5fdcb8ed",
"blog/old_privacy.png": "df317453fa7ad192bdabe37f1060783d",
"blog/posts/three_days_holidays_recap/index.html": "1265bf3d346d715af400f5087a7efbc6",
"blog/posts/pengalaman-transjakarta/index.html": "6ab1e324d319bc328b9a9b23c0aa9319",
"blog/posts/menjaga-kewarasan-sebagai-pengemudi/index.html": "50710feb868300295330080c071ba3f2",
"blog/posts/django_plus_vue_dan_vite/index.html": "d16cf55573c59272375560efb4cb62d6",
"blog/posts/bugs-in-audioplayers-package/index.html": "0c87b1c418c8c58b1f2fcd52c4e37e55",
"blog/posts/catatan_tentang_pyinstaller/index.html": "89b095802151cddc809913949a445d1e",
"blog/posts/antara-impian-syukur-dan-ikhtiar/index.html": "917b04cfd6c6f5ee46929eeafaaddf65",
"blog/posts/cara-deploy-flutter-web-dan-hugo-di-github-pages/index.html": "aa48c0ece481f3cea794074de5bbb1b7",
"blog/posts/blog-gratisan-dengan-github-pages/index.html": "8d2f406dea987d3fd70faa1f9d22cd30",
"blog/posts/index.xml": "28b8bbc175e1a9f957836d8dce03b104",
"blog/posts/index.html": "8827d794a2226f1680c5e78376505997",
"blog/posts/first-post/index.html": "d7fa5db8e6095bf8235aa96c0b687156",
"blog/posts/pengalaman-update-app-google-play-ditolak/index.html": "41673dbff3ceb2a630c309f0015b9856",
"blog/posts/pengalaman-kena-limit-ad-serving-admob/index.html": "bd057f1798508e57094d109d28646f2e",
"blog/ad_match_rate.PNG": "387bf3a1636b8140b07bff11d1d4578f",
"blog/ad_request.PNG": "dffeb942a8d183619b76bcda52ae1584",
"blog/index.xml": "2a4f612c1e515430ca189217110a402b",
"blog/app-ads.txt": "30d7d2a21d13216b2d2a65db407d995f",
"blog/index.html": "93f14da38e86725a0aa795e769af0f48",
"blog/tags/transjakarta/index.xml": "5ff1262cc9ff5c199166d6a041a881df",
"blog/tags/transjakarta/index.html": "f8d6c72620d63e46ff35fd66fcd1d26a",
"blog/tags/gratis/index.xml": "a930094f716bfd8fabf454414447f10b",
"blog/tags/gratis/index.html": "570ceb2a83f80f3c2c3954e8170c9869",
"blog/tags/blog/index.xml": "4d019c5fc2a0c16f1ed19c13bc6abaf6",
"blog/tags/blog/index.html": "c5f171deeea9aa68aa0359566ebb1afc",
"blog/tags/mrt/index.xml": "d38670e0ae2d9e5d96afea6b090d4e58",
"blog/tags/mrt/index.html": "c0f45f0d896538e5bebc5a8545facad1",
"blog/tags/pikiran/index.xml": "68c4c1b87e6eebe190d165405099497e",
"blog/tags/pikiran/index.html": "85c0f19bc75e637c0f488f8bae6dd8c9",
"blog/tags/index.xml": "bf8eb951ea7eaafc3b168c9c7fd356fd",
"blog/tags/index.html": "41d27c35cd1ceafda0e443fb063aacde",
"blog/fonts/roboto-mono-v12-latin-regular.eot": "3228d8521441fb81e2225bd11cf2db57",
"blog/fonts/fira-sans-v10-latin-regular.eot": "9720cc0c5575cb480360ff90655df31b",
"blog/fonts/fira-sans-v10-latin-regular.svg": "7307389c2218fa743b42f50e6452bee6",
"blog/fonts/ibm-plex-mono-v6-latin-500italic.ttf": "cc77a2441af9724f45892399474ec524",
"blog/fonts/roboto-mono-v12-latin-regular.woff2": "d8ab6e6b16f310580e0570584c0ce6d4",
"blog/fonts/ibm-plex-mono-v6-latin-500italic.eot": "fa555dc3a44f8b90f6d55042856e3b81",
"blog/fonts/fira-sans-v10-latin-regular.woff": "baa3b51e20ff84bf4964223288c0ba10",
"blog/fonts/fira-sans-v10-latin-regular.ttf": "ff33952a9f8385a840074521efbc8f38",
"blog/fonts/roboto-mono-v12-latin-regular.svg": "3fe0ad7e4325cf8450f1271bc0724d03",
"blog/fonts/ibm-plex-mono-v6-latin-500italic.woff2": "e4b488aee8485ff4fb95cc0afbdb2d0c",
"blog/fonts/ibm-plex-mono-v6-latin-500italic.svg": "067c95e208387e895f60ebae243768c5",
"blog/fonts/ibm-plex-mono-v6-latin-500italic.woff": "2ea8ff3f52922e7c387dd14aa99f453c",
"blog/fonts/roboto-mono-v12-latin-regular.ttf": "7a9da4709ccd33c6f8000ea30b918e95",
"blog/fonts/roboto-mono-v12-latin-regular.woff": "0f03f6f8fedfdf7b895f8e633a76a511",
"blog/fonts/fira-sans-v10-latin-regular.woff2": "78773521b0ffe376bc7edd8ec2a591fb",
"blog/gambar1.png": "ae2bead9fc1b7f68fded9fc62aa46550",
"blog/CNAME": "1692fb68df06442bf8eacaae9475f47c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutter_bootstrap.js": "e09c30937360cb33d8e5e7427329138f",
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
