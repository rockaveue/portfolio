import {
  Box,
  Heading,
  HStack,
  IconButton,
  Link as ChakraLink,
  useColorMode,
} from '@chakra-ui/react'
import { Link } from '@remix-run/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import type { MetaFunction } from '@remix-run/node'

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'Good Route',
    description: 'Good route',
  }
}

export function CatchBoundary() {
  return (
    <Box bg="yellow.500">
      <Heading as="h2">I caught some condition</Heading>
    </Box>
  )
}

export function ErrorBoundary() {
  return (
    <Box bg="red.400" color="white">
      <Heading as="h2">Something is really wrong!</Heading>
    </Box>
  )
}

export default function GoodRoute() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box fontFamily="system-ui, sans-serif" lineHeight={1.4}>
      <IconButton
        aria-label="toggle-dark"
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
      <Heading as="h1" color="blue.400">
        Welcome to Remix with Chakra UI!
      </Heading>
      <HStack spacing={4}>
        <ChakraLink
          href="https://remix.run/docs"
          target="_blank"
          rel="noreferrer"
        >
          Remix Docs
        </ChakraLink>
        <ChakraLink
          target="_blank"
          href="https://chakra-ui.com/docs/getting-started"
          rel="noreferrer"
        >
          Chakra UI Docs
        </ChakraLink>
        <ChakraLink as={Link} color="red.400" to="/nothing-here">
          Nothing here
        </ChakraLink>
      </HStack>
    </Box>
  )
}
