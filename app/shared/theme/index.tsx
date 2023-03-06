import { extendTheme } from '@chakra-ui/react'

const Theme = (): { theme: Record<string, any> } => {
  const colors = {
    brand: {
      100: '#121212',
    },
  }

  const fonts = {
    heading: "'M PLUS Rounded 1c'",
  }

  const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
  return { theme: extendTheme({ config, fonts }) }
}

export default Theme
