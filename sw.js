/* 라디오 손님 — 앱 설치용 서비스워커 (저장·가로채기 없이 그대로 통과만 함) */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(fetch(r));
});
