'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "32fb941716e0b25a2be42f02e7392a5f",
"assets/AssetManifest.bin.json": "a5c91b8471314488fffe46ef61e0580b",
"assets/AssetManifest.json": "6051acc5eddc036aead901848c903c8c",
"assets/assets/bank.svg": "941c0480bea8bdc6ca7d29fc0b4640fc",
"assets/assets/bg.png": "8422f89f50d34bbf57dc2adf9e681e56",
"assets/assets/calendar.svg": "5da24f42cc2eac5ba7f84b37d2163055",
"assets/assets/card.png": "299e694bfe68985abd9c4e3ea19802d2",
"assets/assets/clipboard.svg": "908a3ba351834d8111a9184f96ee1d15",
"assets/assets/credit-card.svg": "e20c5068e78d4d9a1c719e93f7e84ef6",
"assets/assets/document.svg": "3495668510842cd9097776c7db2cd607",
"assets/assets/drop.svg": "7b8b2af526b2e2512c2682f889fef14f",
"assets/assets/electricity.svg": "b5f6b7666493bd2736f57883b466bb52",
"assets/assets/facebook.png": "e9a841880ae14efb2eabe15051d949f1",
"assets/assets/gg.png": "1c6e97b732317f835ba3fbd9b7c4f710",
"assets/assets/google.jpg": "7410c845aad92053b650af42b8743924",
"assets/assets/google.png": "c49082a7c1a9a343716796e0b9142ac0",
"assets/assets/google.svg": "686f8efa6e3e28e96d1c08399e8d353d",
"assets/assets/home.svg": "63f7eabb7a7d78c178031926c3c9973a",
"assets/assets/invoice.svg": "f7d19983441244e6bd59d7b121b34da0",
"assets/assets/mac-action.svg": "2527f1ab853e49d4d5e9802369653b97",
"assets/assets/man.jpeg": "3667d100cf087238f2cdf0a45a6c587c",
"assets/assets/pie-chart.svg": "23d3f5bae0abfbd169de394912e752af",
"assets/assets/ring.svg": "6ed7f9f01871f426e979afb4e2252bf2",
"assets/assets/salary.svg": "1462f937a1198cff1a8838bbea1cc7b2",
"assets/assets/search.svg": "b2feb1c702b9b4c46343cfc222770c0d",
"assets/assets/transfer.svg": "d4e0e58b46a323d2b0dcb37ec672f2ce",
"assets/assets/treebg.png": "a53676e010e291d26aba6ab0a53b6d22",
"assets/assets/treefsdf.png": "5829a6a281c7e7e134a6d14cdd938fda",
"assets/assets/trophy.svg": "e036099c505d72b2455e1f8388e6376d",
"assets/assets/tuta.jpg": "10eae52b25aafd290ff182f59b814a1d",
"assets/assets/twitter.png": "ad108effd25dbda00ee733c8bca9979a",
"assets/assets/wifi.svg": "c83a375863190fc9862addc8fab99d49",
"assets/FontManifest.json": "329607a1d1faaad9e5d99ea7ee33b66e",
"assets/fonts/MaterialIcons-Regular.otf": "83c7e6f35b3c18a62d4924f7c3147a07",
"assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/lib/uploads/1.jpg": "97ce8f46b6f0d6711b1d1160c85ab1f8",
"assets/lib/uploads/2.jpg": "16028d574468b6a0389e43b74499b62a",
"assets/lib/uploads/4.jpg": "b1d596b4b160c7d038d9b2b4d4181d03",
"assets/lib/uploads/5.jpg": "626e9b62a625cae08b35149903e0b3a3",
"assets/NOTICES": "bf27e30dee524dc3f034be4cace68c98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a850c5f7831a18989203c743a55f1247",
"/": "a850c5f7831a18989203c743a55f1247",
"main.dart.js": "dc3bb71a05804da807ce7a5050c69f6f",
"manifest.json": "1f23274fe9f8f487de98e1d95ca0e54c",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "73c6046ea5ceb0220ea78b76becf8a0b",
"version.json": "91e3b8b0ba794364d4d823b046f1b387"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
