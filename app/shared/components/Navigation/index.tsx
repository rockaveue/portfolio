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
  Link,
  Heading,
  useColorMode,
  Icon,
} from '@chakra-ui/react'
import { NavLink, useLocation } from '@remix-run/react'
import Logo from '../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const LinkItem = ({ href, path, children }: any) => {
  const active = path === href
  const inactiveColorStyle = {
    color: useColorModeValue('gray.00', 'whiteAlpha.900'),
  }
  const activeColorStyle = {
    color: useColorModeValue('gray.400', 'whiteAlpha.400'),
    bg: 'glassTeal',
  }
  return (
    <NavLink to={href}>
      <Box p={2} {...(active ? activeColorStyle : inactiveColorStyle)}>
        {children}
      </Box>
    </NavLink>
  )
}

type HeaderProps = {
  path: string
}

const NavigationHeader: React.FC<HeaderProps> = (props) => {
  const { path } = props
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const location = useLocation()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
      >
        <Container py={{ base: '4', lg: '5' }}>
          <HStack
            /* spacing="10" */ justify="space-between"
            alignItems={'center'}
          >
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              <Logo />
            </Heading>
            <>
              <Button onClick={toggleColorMode}>
                {colorMode == 'light' ? (
                  <FontAwesomeIcon icon={faMoon} />
                ) : (
                  <FontAwesomeIcon icon={faSun} />
                )}
              </Button>
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    <LinkItem href="/works" path={path}>
                      <Button variant="primary">Works</Button>
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                      <Button variant="primary">Posts</Button>
                    </LinkItem>
                    {/* <Link to="tl">
                    <Button variant="ghost">Translations</Button>
                    </Link>
                  {location.pathname.includes('tl') && (
                    <Link to="tl/series">
                    <Button variant="ghost">Series</Button>
                    </Link>
                  )} */}
                  </ButtonGroup>
                </Flex>
              ) : (
                <Flex justifyContent="space-between">
                  <IconButton
                    variant="ghost"
                    icon={<Box>hamburger</Box>}
                    aria-label="Open Menu"
                  />
                </Flex>
              )}
            </>
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}

export default NavigationHeader
