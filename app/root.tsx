import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react'
import { withEmotionCache } from '@emotion/react'
import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { useContext, useEffect } from 'react'
import globalStyleURL from '~/styles/global.css'
import { ClientStyleContext /* , ServerStyleContext */ } from './context'
import NavigationHeader from './shared/components/Navigation'

export const links = () => {
  return [{ rel: 'stylesheet', href: globalStyleURL }]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'site made by duk',
  viewport: 'width=device-width,initial-scale=1',
})

const colors = {
  brand: {
    100: '#121212',
  },
}

const config = { initialColorMode: 'dark', useSystemColorMode: false }
const theme = extendTheme(config)

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </ChakraProvider>
    </Document>
  )
}

interface DocumentProps {
  children: React.ReactNode
  title?: string
}

export const Document = ({ children, title }: DocumentProps) => {
  // const serverStyleData = useContext(ServerStyleContext)
  const clientStyleData = useContext(ClientStyleContext)

  // Only executed on client
  useEffect(() => {
    // re-link sheet container
    // emotionCache.sheet.container = document.head
    // // re-inject tags
    // const tags = emotionCache.sheet.tags
    // emotionCache.sheet.flush()
    // tags.forEach((tag) => {
    //   ;(emotionCache.sheet as any)._insertTag(tag)
    // })
    // reset cache to reapply global styles
    // clientStyleData?.reset()
  })
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {title ? <title>{title}</title> : null}
      </head>
      <body>
        <Container>
          {children}
          {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
        </Container>
      </body>
    </html>
  )
}

export function Layout({ children }: any) {
  return (
    <>
      <NavigationHeader />
      {children}
    </>
  )
}

export function ErrorBoundary({ error }: any) {
  console.log(error)
  return (
    <Document>
      <Layout>
        <h1>There was an Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  )
}
