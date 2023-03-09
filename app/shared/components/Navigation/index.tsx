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
  Heading,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react'
import { NavLink, useLocation } from '@remix-run/react'
import Logo from '../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'

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
      <Box {...(active ? activeColorStyle : inactiveColorStyle)}>
        {children}
      </Box>
    </NavLink>
  )
}

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button onClick={toggleColorMode} variant="outline" px={3}>
          {colorMode == 'light' ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </Button>
      </motion.div>
    </AnimatePresence>
  )
}

type HeaderProps = {
  path: string
}

const NavigationHeader: React.FC<HeaderProps> = (props) => {
  const { path } = props
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const location = useLocation()
  return (
    <Box as="section">
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
            <Flex>
              <ThemeToggleButton />
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup
                    variant="link"
                    // spacing="8"
                    alignItems="center"
                    sx={{ '& button': { px: 2 } }}
                    ml={2}
                  >
                    <LinkItem href="/works" path={path} p={0}>
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
                  <Box ml={2} display={{ base: 'inline-block' }}>
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        icon={<FontAwesomeIcon icon={faBars} />}
                        variant="outline"
                        aria-label="Options"
                      />
                      <MenuList>
                        <LinkItem href="/works" path={path}>
                          <Button variant="primary">Works</Button>
                        </LinkItem>
                        <LinkItem href="/posts" path={path}>
                          <Button variant="primary">Posts</Button>
                        </LinkItem>
                      </MenuList>
                    </Menu>
                  </Box>
                  {/* <IconButton
                    variant="ghost"
                    icon={<Box>hamburger</Box>}
                    aria-label="Open Menu"
                  /> */}
                </Flex>
              )}
            </Flex>
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}

export default NavigationHeader
