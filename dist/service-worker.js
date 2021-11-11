importScripts("precache-manifest.ab307f96d00b385bf1bf16736c604437.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


debugger // eslint-disable-line no-debugger

const appVersionNumber="0.3.3"

if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
 } 
else {
  console.log(`Workbox didn't load`);
}

workbox.routing.registerRoute('https://www8.uis.no/fag/vue/externalLoads/lang.json', 
  workbox.strategies.networkFirst({
    networkTimeoutSeconds: 5,
    cacheName: 'placeholder-cache',
}));





/*
Offline Post Requests With Workbox (VueJS)
https://medium.com/@mario.brendel1990/offline-post-requests-with-workbox-vuejs-4df0e9f93da9

const bgSyncPlugin = new workbox.backgroundSync.Plugin('queueExample', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});
workbox.routing.registerRoute(
  'https://jsonplaceholder.typicode.com/posts',
  workbox.strategies.networkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
);

*/
