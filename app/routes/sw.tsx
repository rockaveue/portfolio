export function loader() {
  console.log('loading sw')
  return new Response(
    `
  self.addEventListener('install', function (event) {
    // Perform install steps
    console.log('installing sw')
    let url = new URL(event.request.url);
    let method = event.request.method;

    // any non GET request is ignored
    if (method.toLowerCase() !== "get") return;

    // If the request is for the favicons, fonts, or the built files (which are hashed in the name)
    if (
      url.pathname.startsWith("/favicons/") ||
      url.pathname.startsWith("/fonts/") ||
      url.pathname.startsWith("/build/")
    ) {
      event.respondWith(
        // we will open the assets cache
        caches.open("assets").then(async (cache) => {
          // if the request is cached we will use the cache
          let cacheResponse = await cache.match(event.request);
          if (cacheResponse) return cacheResponse;

          // if it's not cached we will run the fetch, cache it and return it
          // this way the next time this asset it's needed it will load from the cache
          let fetchResponse = await fetch(event.request);
          cache.put(event.request, fetchResponse.clone());

          return fetchResponse;
        })
      );
    }

    return;
  })

  self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        // Cache hit - return response
        if (response) {
          return response
        }
        return fetch(event.request)
      })
    )
  })`,
    {
      headers: {
        'Content-Type': 'text/javascript',
      },
    }
  )
}
