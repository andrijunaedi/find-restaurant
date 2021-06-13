/* eslint-disable no-restricted-globals */
/* eslint no-underscore-dangle: ["error", { "allow": ["__WB_MANIFEST"] }] */
import 'regenerator-runtime/runtime';
import { cleanupOutdatedCaches } from 'workbox-precaching';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { registerRoute } from 'workbox-routing/registerRoute';
import {
  skipWaiting,
  clientsClaim,
  setCacheNameDetails,
} from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import CONFIG from './global/config';

skipWaiting();
clientsClaim();

setCacheNameDetails({
  prefix: CONFIG.CACHE_NAME,
});

precacheAndRoute(self.__WB_MANIFEST, {
  ignoreURLParametersMatching: [/.*/],
  plugins: [
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
      maxEntries: 50,
    }),
  ],
});

registerRoute(
  /^https:\/\/dicoding-restaurant-api\.el\.r\.appspot\.com\/(?:(list|detail))/,
  new StaleWhileRevalidate({
    cacheName: 'restaurant-api',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
        maxEntries: 50,
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) =>
    url.origin === 'https://fonts.googleapis.com' ||
    url.origin === 'https://fonts.gstatic.com',
  new StaleWhileRevalidate(),
);

cleanupOutdatedCaches();
