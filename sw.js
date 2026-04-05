var CACHE='tacosco-v7';
var ASSETS=[
  '/',
  '/index.html',
  '/map.html',
  '/store.html',
  '/stores-meta.json',
  '/store-coords2.js',
  '/icon-192.png',
  '/icon-512.png',
  '/ogp.png',
  '/manifest.json'
];

self.addEventListener('install',function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){return c.addAll(ASSETS);})
  );
  self.skipWaiting();
});

self.addEventListener('activate',function(e){
  e.waitUntil(
    caches.keys().then(function(names){
      return Promise.all(
        names.filter(function(n){return n!==CACHE;}).map(function(n){return caches.delete(n);})
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch',function(e){
  e.respondWith(
    caches.match(e.request).then(function(r){
      if(r) return r;
      return fetch(e.request).then(function(resp){
        if(!resp||resp.status!==200||resp.type!=='basic') return resp;
        var clone=resp.clone();
        caches.open(CACHE).then(function(c){c.put(e.request,clone);});
        return resp;
      });
    }).catch(function(){return caches.match('/');})
  );
});
