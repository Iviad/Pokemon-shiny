/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "bundle.css",
    "revision": "ad16938d10c4cd7780b4ede40603c469"
  },
  {
    "url": "bundle.js",
    "revision": "a499c347efdfcba42c9c093b6dd096ab"
  },
  {
    "url": "favicon.png",
    "revision": "c8f26ae99b1a32a101924c83781a87a9"
  },
  {
    "url": "html2canvas.min.js",
    "revision": "07dfafa027eb2f5e81f234eeaa30ec16"
  },
  {
    "url": "icon.png",
    "revision": "c0e7522596d105b700d1d6d0cbbcd47c"
  },
  {
    "url": "index.html",
    "revision": "1ed525cab8d121c8e3db2679e3a1b4ca"
  },
  {
    "url": "manifest.json",
    "revision": "a5d12498a4b8b6fa639c2131f3dd8c9a"
  },
  {
    "url": "pms.json",
    "revision": "bbef4f7cc454bf110f8044f73e33ba2c"
  },
  {
    "url": "pokemon_icon_000.png",
    "revision": "b8fd366bba04e4f3157a3f1c5d579bc2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*PogoAssets.*\.(?:png)$/, new workbox.strategies.CacheFirst({ "cacheName":"pm-shiny-cache--cdn-image", plugins: [new workbox.expiration.Plugin({ maxEntries: 1000, purgeOnQuotaError: false })] }), 'GET');
