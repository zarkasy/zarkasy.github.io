'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b2b46d75e71eac076de5ee6b49b45a58",
"assets/AssetManifest.bin.json": "7da7ceb9e51749d78bbe3bdcfd2a325e",
"assets/AssetManifest.json": "1dcb14687ef025bbfbf05525f3b6d1bd",
"assets/assets/images/googleplay.png": "468ef7f576ce6cfef78231938349ab0b",
"assets/assets/images/logo.png": "17290c0ad0562d2e492ca5d8e3be8e4a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3f77e73f5fbe1eac40a1d20346577e7b",
"assets/NOTICES": "f0c5590e7e01e50674e838a669389d3d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"blog/404.html": "80b18b46b8c836fdb3a4236c54825ae7",
"blog/admob_limit.PNG": "21852b78121e7c7a96df8814d2fcaf0a",
"blog/ad_match_rate.PNG": "387bf3a1636b8140b07bff11d1d4578f",
"blog/ad_request.PNG": "dffeb942a8d183619b76bcda52ae1584",
"blog/app-ads.txt": "30d7d2a21d13216b2d2a65db407d995f",
"blog/app_rejected.PNG": "67ca3697192225e05b75ddcc5fdcb8ed",
"blog/app_rejected2.PNG": "b57a1877533f7f4a2db49d55e46a3e29",
"blog/assets/css/stylesheet.54405a410796490bc874ab6181fac9b675753cc2b91375d8f882566459eca428.css": "5925e4d5c07a4b33ae39dadd3bcc9165",
"blog/belajar-membaca-tanpa-mengeja/privacy": "9fba753089150ca58a95a8bb5fe8e979",
"blog/belajar-membaca-tanpa-mengeja/privacy-policy.txt": "7b03ed63a1350dd93fd572bb68a6cc81",
"blog/belajar-membaca-tanpa-mengeja/privacy.txt": "9fba753089150ca58a95a8bb5fe8e979",
"blog/categories/index.html": "e291ad8837f227c6d99946b42bd15289",
"blog/categories/index.xml": "20fab51b65855de1f9d551167e180173",
"blog/CNAME": "8baf221729a074de97a953d95c809dd4",
"blog/css/dark.c95c5dcf5f32f8b67bd36f7dab66680e068fce2b303087294114aabf7a7c080b.css": "6dd18525cee722ed26e2a015d74fa60c",
"blog/css/fonts.11a1877508139eac0b5b4852ceb110c35641b3533321e66e39149e901ed5756b.css": "d9e9c0acf75c75db30ef6c20823547ba",
"blog/css/main.d902908ac6e0fab67957de5db5aea1b6455b19ae2ca98eac4c95a4a0fdc02238.css": "f6cf8010b2642cbb8485122edce798a0",
"blog/fonts/fira-sans-v10-latin-regular.eot": "9720cc0c5575cb480360ff90655df31b",
"blog/fonts/fira-sans-v10-latin-regular.svg": "4b7b6e16dbf14b034cee08811ab6e6e9",
"blog/fonts/fira-sans-v10-latin-regular.ttf": "ff33952a9f8385a840074521efbc8f38",
"blog/fonts/fira-sans-v10-latin-regular.woff": "baa3b51e20ff84bf4964223288c0ba10",
"blog/fonts/fira-sans-v10-latin-regular.woff2": "78773521b0ffe376bc7edd8ec2a591fb",
"blog/fonts/ibm-plex-mono-v6-latin-500italic.eot": "fa555dc3a44f8b90f6d55042856e3b81",
"blog/fonts/ibm-plex-mono-v6-latin-500italic.svg": "676f1ec759d618a3713d9fa168a2a56d",
"blog/fonts/ibm-plex-mono-v6-latin-500italic.ttf": "cc77a2441af9724f45892399474ec524",
"blog/fonts/ibm-plex-mono-v6-latin-500italic.woff": "2ea8ff3f52922e7c387dd14aa99f453c",
"blog/fonts/ibm-plex-mono-v6-latin-500italic.woff2": "e4b488aee8485ff4fb95cc0afbdb2d0c",
"blog/fonts/roboto-mono-v12-latin-regular.eot": "3228d8521441fb81e2225bd11cf2db57",
"blog/fonts/roboto-mono-v12-latin-regular.svg": "b9480756af22d7519efd92f7876e78dc",
"blog/fonts/roboto-mono-v12-latin-regular.ttf": "7a9da4709ccd33c6f8000ea30b918e95",
"blog/fonts/roboto-mono-v12-latin-regular.woff": "0f03f6f8fedfdf7b895f8e633a76a511",
"blog/fonts/roboto-mono-v12-latin-regular.woff2": "d8ab6e6b16f310580e0570584c0ce6d4",
"blog/gambar1.png": "ae2bead9fc1b7f68fded9fc62aa46550",
"blog/images/admob_limit.PNG": "21852b78121e7c7a96df8814d2fcaf0a",
"blog/images/ad_match_rate.PNG": "387bf3a1636b8140b07bff11d1d4578f",
"blog/images/ad_request.PNG": "dffeb942a8d183619b76bcda52ae1584",
"blog/images/release_history.PNG": "7e7fb8e0330cb71f8ca538f94765c9d7",
"blog/index.html": "06c76aec22540636fbce7b56a5eca80d",
"blog/index.xml": "19993b398899478dd31e5b05c1d0be40",
"blog/js/feather.min.js": "7221503f01a13c13a508e4bbae6575eb",
"blog/js/main.js": "d41d8cd98f00b204e9800998ecf8427e",
"blog/js/themetoggle.js": "9781368888a673067ecab9704376eeb0",
"blog/old_privacy.png": "df317453fa7ad192bdabe37f1060783d",
"blog/page/1/index.html": "81c140c1156337c4ec851bae595caf32",
"blog/page/2/index.html": "cd919be40f091219364a9427c4ad7199",
"blog/page/3/index.html": "33b906d9ec19c609597c6d2927cf7e56",
"blog/page/4/index.html": "0dd117fea7ed80464517da5c2d6f5fae",
"blog/posts/antara-impian-syukur-dan-ikhtiar/index.html": "f9c2bc2a5683e40b59f327a88a619136",
"blog/posts/blog-gratisan-dengan-github-pages/index.html": "505dfc1028dc3802edb60f02270db8ef",
"blog/posts/catatan_tentang_pyinstaller/index.html": "43b9c29279404b6ec72b3ab2a1abac58",
"blog/posts/django_plus_vue_dan_vite/index.html": "4abab20094354fbe79f4962bec0c326d",
"blog/posts/first-post/index.html": "0020ee4a2a5b8cb5c7b84872fe4cf855",
"blog/posts/index.html": "fd432bc2de20fbc67568fd961ae0147c",
"blog/posts/index.xml": "97ee1a1ace5ba12649f695359772daa0",
"blog/posts/menjaga-kewarasan-sebagai-pengemudi/index.html": "623ca16f41dfb91b7c4c208a4286f089",
"blog/posts/page/1/index.html": "68331f881492d63ad3b2b23323000610",
"blog/posts/page/2/index.html": "55ab327b48b363f343af182cb0b53b4c",
"blog/posts/page/3/index.html": "ad0a85cfd8ca5c6b68b6631c2d1c231b",
"blog/posts/page/4/index.html": "89b3cb785c68feda48760ac38b375b36",
"blog/posts/pengalaman-kena-limit-ad-serving-admob/index.html": "8480019f6a976113a516c0b5cd9df1bb",
"blog/posts/pengalaman-transjakarta/index.html": "98e9f2c2897c52b676ba5148f2458b89",
"blog/posts/pengalaman-update-app-google-play-ditolak/index.html": "20e1e41a78491a96847bb5104f92361e",
"blog/posts/three_days_holidays_recap/index.html": "84c0a4bd89d0df5fc81e42d799fb52ac",
"blog/release_history.PNG": "7e7fb8e0330cb71f8ca538f94765c9d7",
"blog/sitemap.xml": "e8c97c4e40e7651b575dce558b74a4d2",
"blog/tags/blog/index.html": "e44f38ed67d3b1eb720495d0435f57b9",
"blog/tags/blog/index.xml": "6d7fb3eb0a579cbb4288534cda18e935",
"blog/tags/blog/page/1/index.html": "46570a4a7233beb1df21b149df802525",
"blog/tags/gratis/index.html": "fff451914d9cef25824c70b79a452539",
"blog/tags/gratis/index.xml": "a6c475f1102bcc63322e6534b25cacc3",
"blog/tags/gratis/page/1/index.html": "0bc9c5909a9b1866b8cf1385cc1add41",
"blog/tags/index.html": "0350ddbcc4505d4457749d3e197969dc",
"blog/tags/index.xml": "1419f2f0d07335e867d119eea38155f3",
"blog/tags/mrt/index.html": "9062c94b6eb6f0d10d031818b93f0534",
"blog/tags/mrt/index.xml": "ede89817ecfa09f7330aa9994e21392b",
"blog/tags/mrt/page/1/index.html": "9d9d87ab6e5c7baeda5bad1070df1aea",
"blog/tags/pikiran/index.html": "2d8fceb750e554d0ef6b809a3e4dc78f",
"blog/tags/pikiran/index.xml": "3bd8e2c308182b2b858ac88938b7551f",
"blog/tags/pikiran/page/1/index.html": "e724197b34c679835fde91a9ff2c5b95",
"blog/tags/transjakarta/index.html": "ef32165cd8ab7e0d9679b40aba5a7ef6",
"blog/tags/transjakarta/index.xml": "106aeea7984358d011026f6e07ede99c",
"blog/tags/transjakarta/page/1/index.html": "d68a5231b7fb195e7381794f3dead859",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "ecb73ce9dd55c9aa68eb21a81d71e3d3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "43f8fea051f2d1b0a2f35ac280d24136",
"/": "43f8fea051f2d1b0a2f35ac280d24136",
"main.dart.js": "d79f85408dc4e8bdde0b27706a9906b1",
"manifest.json": "f1d124795c1e9da49634e4d297a19903",
"version.json": "6302f4bfadafe063398cab2ae6ba0871"};
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
