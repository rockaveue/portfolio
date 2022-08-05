import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link, useLocation } from '@remix-run/react'

const NavigationHeader = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const location = useLocation()
  return (
    <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
      >
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  <Link to="/">
                    <Button variant="primary">Home</Button>
                  </Link>
                  <Link to="tl">
                    <Button variant="ghost">Translations</Button>
                  </Link>
                  {location.pathname.includes('tl') && (
                    <Link to="tl/series">
                      <Button variant="ghost">Series</Button>
                    </Link>
                  )}
                </ButtonGroup>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<Box>hamburger</Box>}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}

export default NavigationHeader
