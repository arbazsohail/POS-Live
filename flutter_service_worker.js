'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d6a1be022d6d8fd883beee7ddf415b6a",
"assets/AssetManifest.bin.json": "e328b22d2e0c7cae49512c40aa3e900a",
"assets/AssetManifest.json": "23fcb668ac850a82a3d6cd30bdf607ac",
"assets/assets/font/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/assets/font/Ubuntu-Light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"assets/assets/font/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/assets/font/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/image/account.png": "ce04d3b5bb4604a4b0e8345d0e165e79",
"assets/assets/image/account_management.png": "d9853ab2f60ceb74787ff918bd788aab",
"assets/assets/image/add_category_icon.png": "7cee9fdd6f96df573ceedfa9c2dd6fb2",
"assets/assets/image/add_icon.png": "f61693d6e2e2953399fb258ffa859ad6",
"assets/assets/image/add_new_category.png": "01f35932fc049cde23f2eff86746ca88",
"assets/assets/image/bar_code.png": "64d565a8d2a7ff22a3e867ad05ac9634",
"assets/assets/image/bar_code_generate.png": "91d56374d3f490e2109f4cd8aaa3a1c3",
"assets/assets/image/billing_section.png": "0d567dd6ffbe0742b890a76205acf045",
"assets/assets/image/brand.png": "100b97584131a10a2608becfbe336ae4",
"assets/assets/image/calender.png": "e57c98a6b2a8dcd8925210fca1cd624a",
"assets/assets/image/camera_thumbnail.png": "4eb6d8139dd49ed4e2e4ed22313e5fb8",
"assets/assets/image/cart.png": "c2957ef6f62ccde1c9676e4eb5f94e90",
"assets/assets/image/cart_icon.png": "e1e55a5675e507ff2470b8cd94312504",
"assets/assets/image/categories.png": "2685749bfbd3144e3ee31de0625f40d4",
"assets/assets/image/confirm_purchase.png": "b7b5dd94329cb3106da75cf01bc4fc55",
"assets/assets/image/coupon.png": "8e080da15f56c458965645144f9a211a",
"assets/assets/image/coupon_list_background.png": "6c4c613a33d67ffd293cd369bcb8eed8",
"assets/assets/image/coupon_list_icon.png": "4fdc8e54be7e0f7e8707aaa482fa8108",
"assets/assets/image/dashboard.png": "55dce9966dcb0e2e2f5a831e78c9bbc0",
"assets/assets/image/delete_icon.png": "a3eb4af0de35155fd50703d38db59779",
"assets/assets/image/dollar.png": "7d4bc24379e4a1d552de69351af56609",
"assets/assets/image/download.png": "0500cf33ed0d5eddb754fa59efef6f5e",
"assets/assets/image/download_format.png": "020bad45079fb7fbe562375501e33bad",
"assets/assets/image/drawer.png": "13f899d55d2840a56e78975c9ff192dd",
"assets/assets/image/edit_icon.png": "7e9acfda2c4e624d7e236ee76b96a552",
"assets/assets/image/empty_box.png": "8a8a81d5d53c0e66da254034f672f3ff",
"assets/assets/image/empty_cart.png": "ced282db6ad362c0187e1973ff84597e",
"assets/assets/image/english.png": "e667999048e9c8c5c5610d1d33908e52",
"assets/assets/image/expense.png": "cd37025d73da5a3d7827e302cbadea0f",
"assets/assets/image/filter_icon.png": "27d04cfa17deff340ba79679622986ba",
"assets/assets/image/guest.png": "15b61a6abf52c4050dab93df36752904",
"assets/assets/image/image_upload_logo.png": "00a3dcca019e6665bfdc728aa75d8221",
"assets/assets/image/import.png": "7fe684fda42c36ed64c2334b7e479378",
"assets/assets/image/import_export.png": "debed903463a96553a25eb6f39106ddb",
"assets/assets/image/income.png": "c02fa220c84ac497dbd46a61afa7fbfc",
"assets/assets/image/item.png": "022b00b84b5ec9742a60998d6e22c344",
"assets/assets/image/Language.png": "92d9289c7d0ebf44269fccee696cddb6",
"assets/assets/image/limited_stock.png": "a23a7aee8a8a10ea592b6f70d3b829bc",
"assets/assets/image/lock.png": "1dc98b7e6cc1dc406dc8b19b94cedc49",
"assets/assets/image/logo.png": "9a3c1193398cc91433fd24bdbde43730",
"assets/assets/image/logout.png": "69651d667a9441ee1d8e0da4b20e8c39",
"assets/assets/image/logo_with_name.png": "924a1de64bab32c5de746e910b020f7a",
"assets/assets/image/maintenance.png": "3cf6759b308c7c9731d5294f400038e1",
"assets/assets/image/my_account.png": "25d259dd03d7907e626dfb023f36aa2f",
"assets/assets/image/no_data_found.png": "3f54fcc4d56570b39bae22e8ab6eeb5f",
"assets/assets/image/no_internet.png": "bb8d725c9d0b01de82027c053d341204",
"assets/assets/image/people_icon.png": "c7fb22925bed73a4e12392f7d44da760",
"assets/assets/image/pie_chart.png": "38521199f186fc31bce462b37ed83cf0",
"assets/assets/image/placeholder.jpg": "81abc0d9b59a9aba9191102834f2d978",
"assets/assets/image/pos.png": "de1dca29206dd4259e1c955142430b98",
"assets/assets/image/product.png": "67815ad4efa9e9f5ce85fe7de104d1bf",
"assets/assets/image/product_setup.png": "4910d5e81f8dfd4d7b1f9fd138975104",
"assets/assets/image/product_unit.png": "d43e1c006d43f85e7af5dee915eb749a",
"assets/assets/image/profile_place_holder.png": "95c544fee126e4166c6592c3a99612eb",
"assets/assets/image/revenue.png": "7cf6d5afceb07118c23e166f94e04f19",
"assets/assets/image/saudi.png": "16d95145521c65f5f9244a938a99336a",
"assets/assets/image/scanner.png": "118ff4bb270d313db2df7c07e99a7f09",
"assets/assets/image/scan_add_item.png": "82da029d6db601f5911b6e7c84877eb5",
"assets/assets/image/search_icon.png": "b73093b2e67190f5b002186c46b4e3c0",
"assets/assets/image/shop_icon.png": "39f0afaf3211e1e3c1e26dafce5c28e3",
"assets/assets/image/shop_setting_image.png": "98169ee8060785879937b69c08ab1371",
"assets/assets/image/stock.png": "f9d99c7530161ca75f13f154fe68f700",
"assets/assets/image/transaction.png": "31836805c85882636e0f8914a320a912",
"assets/assets/image/upload.png": "0ac0793e994f170560b02467bfe9a958",
"assets/assets/language/ar.json": "451ac45a65448cc9c03f5875079ca6b2",
"assets/assets/language/en.json": "d304821c6b7ea43a063dd9751775534a",
"assets/assets/svg/access_deny.svg": "e4493b41d6e6366087e435aee6962a8f",
"assets/assets/svg/add_employee.svg": "8485f08c388e20d3789f484cc5e1686c",
"assets/assets/svg/employee_list.svg": "5788bad0a1438a6a143c6b8e9ef49808",
"assets/assets/svg/employee_role.svg": "a7441e962f6befeade91bf8ed0c7be21",
"assets/assets/svg/update_employee.svg": "d3e7a3861d2072a105760fc100347914",
"assets/FontManifest.json": "ed866fd3967069e4f43e7f7ec307e652",
"assets/fonts/MaterialIcons-Regular.otf": "ec1153a81fa59a7dc663773135ef38b6",
"assets/NOTICES": "1b5f166ded9f945d324878316854b044",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/esc_pos_utils_plus/resources/capabilities.json": "03d6ac67d01a1c0881bc2f462e7935d6",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/simple_barcode_scanner/assets/barcode.html": "7a1c45aca573208e15c71b378fdbe027",
"assets/packages/simple_barcode_scanner/assets/html5-qrcode.min.js": "d88d3200cb547c9e86ee972975561dcd",
"assets/packages/win_ble/assets/BLEServer.exe": "28aa0e2566083c860f029ff4bc32c4ce",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "4e6e9cb94178bb5bbe82867a529bf1cf",
"canvaskit/canvaskit.wasm": "64cc1c11c34313697f61d40fa90dd69d",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "4a107a709d356e8c98df2d6a1dd3793e",
"canvaskit/chromium/canvaskit.wasm": "b5348b696a8243904761bc52959a4b29",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "ab9b8605641422ec29a99434f3c5e2d5",
"canvaskit/skwasm.wasm": "a57540484eaaf16cabc66dae4959e60d",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "73be0981043391c9cd14c33cdabfc0d8",
"firebase-messaging-sw.js": "5cdb65b2724f1ddb7cb71edc12a7e893",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"index.html": "5a36ee639aeb7aabfa129f9c761ab92e",
"/": "5a36ee639aeb7aabfa129f9c761ab92e",
"logo.png": "9a3c1193398cc91433fd24bdbde43730",
"main.dart.js": "4902d737015f1daa6d2ef493326eeee0",
"manifest.json": "1b2e178afb24b4f3ed8ebbf3d74be758",
"style.css": "151f82bececda658439d529bf76ef804",
"version.json": "5aab81ac2386f2fb378cc6602b42a253"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
