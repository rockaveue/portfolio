import * as React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { CacheProvider } from '@emotion/react'
import { RemixBrowser } from 'remix'

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
