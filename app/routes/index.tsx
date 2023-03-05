import { Box, Container, Heading } from '@chakra-ui/react'

export default function Index() {
  return (
    <Container>
      <Box
        sx={{ borderRadius: 'lg', bg: 'red', p: 3, mb: 6, textAlign: 'center' }}
      >
        Hello, I'm a full-stack developer based in Mongolia
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dulguun Tuguldur
          </Heading>
          <p>Developer</p>
        </Box>
      </Box>
    </Container>
  )
}
