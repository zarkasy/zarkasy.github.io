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
"blog/404.html": "767f5e570d8d4798b8383e59d73b8a1f",
"blog/page/1/index.html": "379943ed10d0d890359f4816f6979b3c",
"blog/page/2/index.html": "874af95f887089658b522a5fdb4653fa",
"blog/page/3/index.html": "9a9eb8a49a8461e13f281878b6232475",
"blog/belajar-membaca-tanpa-mengeja/privacy-policy.txt": "c40963c54ecf4235b2622addd474277a",
"blog/assets/css/stylesheet.fc220c15db4aef0318bbf30adc45d33d4d7c88deff3238b23eb255afdc472ca6.css": "af66139028094c8690fd3e300b448403",
"blog/sitemap.xml": "a56e363efc64d8bd3097c6107b12f994",
"blog/categories/index.xml": "4c04baba695c064648bc3b959d351187",
"blog/categories/index.html": "7d0a630f20d5f161e5645f4a56fe9de5",
"blog/admob_limit.PNG": "21852b78121e7c7a96df8814d2fcaf0a",
"blog/app_rejected2.PNG": "b57a1877533f7f4a2db49d55e46a3e29",
"blog/app_rejected.PNG": "67ca3697192225e05b75ddcc5fdcb8ed",
"blog/old_privacy.png": "df317453fa7ad192bdabe37f1060783d",
"blog/posts/three_days_holidays_recap/index.html": "4d3a7bc6f467acf9f113690ec9b5dd7d",
"blog/posts/page/1/index.html": "dab21da026fd6253cc7f72314c7e52aa",
"blog/posts/page/2/index.html": "813538a3c990015bf3b1cc7598f144c3",
"blog/posts/page/3/index.html": "f09894414cf3a9ad519f5fe5a4e5514d",
"blog/posts/pengalaman-transjakarta/index.html": "064e119501fe1133f4c89c58c037a843",
"blog/posts/menjaga-kewarasan-sebagai-pengemudi/index.html": "33fdf1bf4d0a05411cd8153344b72239",
"blog/posts/django_plus_vue_dan_vite/index.html": "d8934e1e151aa4c24a88e32abd9a1ecd",
"blog/posts/bugs-in-audioplayers-package/index.html": "43301dce3e0aa7c82f13e126d8721549",
"blog/posts/catatan_tentang_pyinstaller/index.html": "da135a334162ea48d0655309ca4fc511",
"blog/posts/antara-impian-syukur-dan-ikhtiar/index.html": "92b8027433a54286724c91a24fea33e8",
"blog/posts/cara-deploy-flutter-web-dan-hugo-di-github-pages/index.html": "469cf879d1263a8ade94539788b895b4",
"blog/posts/blog-gratisan-dengan-github-pages/index.html": "c22adbfc7f9533ff97082397365a11f1",
"blog/posts/index.xml": "80d4af0087a5d9fa5dce7744c9b51818",
"blog/posts/index.html": "86f29bcedd03ae10bbf233dc8c134931",
"blog/posts/first-post/index.html": "008dfcb27f7d303ae7ddea4368049db0",
"blog/posts/pengalaman-update-app-google-play-ditolak/index.html": "157d5b50849c53323c363637ea1220e9",
"blog/posts/pengalaman-kena-limit-ad-serving-admob/index.html": "16b531ece961ab2c8bb59f3201b0c3f6",
"blog/ad_match_rate.PNG": "387bf3a1636b8140b07bff11d1d4578f",
"blog/ad_request.PNG": "dffeb942a8d183619b76bcda52ae1584",
"blog/index.xml": "3de19eb4afbc5ff28d80dc171c64af38",
"blog/app-ads.txt": "30d7d2a21d13216b2d2a65db407d995f",
"blog/index.html": "4a4a65fa457befc6678bbd46146ca2e0",
"blog/tags/transjakarta/page/1/index.html": "0b0b4638466d26b446ec4d47ef31bcc4",
"blog/tags/transjakarta/index.xml": "828817fed3680af403fa4a6a71faad69",
"blog/tags/transjakarta/index.html": "ea58fb4d289af0e8354d4fb07d022735",
"blog/tags/gratis/page/1/index.html": "8493485a5031feb42c77dad2a8119766",
"blog/tags/gratis/index.xml": "490218de27f8f22369784c371c675359",
"blog/tags/gratis/index.html": "224f414eb13b8d1fe83f9c52df0d6283",
"blog/tags/blog/page/1/index.html": "a2f45b0f7c493a5ab4f0a5b97ec90c92",
"blog/tags/blog/index.xml": "e570ee3d2b661b8ff2cf4be824ff2f02",
"blog/tags/blog/index.html": "76d5be4f945f93e87a88d6786bca7854",
"blog/tags/mrt/page/1/index.html": "c5bc0d11a95b8e1c5cd85ab1500c30dc",
"blog/tags/mrt/index.xml": "2b9f0699d87786cb577825e605c936eb",
"blog/tags/mrt/index.html": "e2ded98dfa083d17ef2b9d142f389ef0",
"blog/tags/pikiran/page/1/index.html": "4f763509f9384daa703d42a5e7927503",
"blog/tags/pikiran/index.xml": "4465b19a001c3a175342ae5482e5b9e9",
"blog/tags/pikiran/index.html": "9a3a5ee228986fbb97afb8570bc19187",
"blog/tags/index.xml": "4e1319a464cea4f254c7fe7a70d619a8",
"blog/tags/index.html": "9a2f8553fb771e095c2d55bb0a43471b",
"blog/gambar1.png": "ae2bead9fc1b7f68fded9fc62aa46550",
"blog/CNAME": "1692fb68df06442bf8eacaae9475f47c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutter_bootstrap.js": "987c678625d49049c5117a2c11231556",
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
