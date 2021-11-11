importScripts("precache-manifest.75830588ef224876da908f9d45509593.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


debugger // eslint-disable-line no-debugger
if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
 } 
else {
  console.log(`Workbox didn't load`);
}

workbox.routing.registerRoute('https://www8.uis.no/fag/vue/externalLoads/lang.json', workbox.strategies.cacheFirst({
    cacheName: 'placeholder-cache',
}));
