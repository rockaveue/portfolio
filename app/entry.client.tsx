import * as React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { CacheProvider } from '@emotion/react'
import { RemixBrowser } from '@remix-run/react'

import { ClientStyleContext } from './context'
import { createEmotionCache } from './createEmotionCache'

interface ClientCacheProviderProps {
  children: React.ReactNode
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = React.useState(createEmotionCache())

  function reset() {
    setCache(createEmotionCache())
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  )
}

hydrateRoot(
  document,
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>
)

if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw')
      .then((res) => console.log('registered', res))
      .catch((err) => console.log('error', err))
    // navigator.serviceWorker
    //   .register("/entry.worker.js")
    //   .then(() => navigator.serviceWorker.ready)
    //   .then(() => {
    //     if (navigator.serviceWorker.controller) {
    //       navigator.serviceWorker.controller.postMessage({
    //         type: "SYNC_REMIX_MANIFEST",
    //         manifest: window.__remixManifest,
    //       });
    //     } else {
    //       navigator.serviceWorker.addEventListener("controllerchange", () => {
    //         navigator.serviceWorker.controller?.postMessage({
    //           type: "SYNC_REMIX_MANIFEST",
    //           manifest: window.__remixManifest,
    //         });
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Service worker registration failed", error);
    //   });
  })
}
