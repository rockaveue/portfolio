import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import { BioSection, BioYear } from './Bio'
import Paragraph from './Paragraph'
import Section from './Section'

const HomeContainer: React.FC = () => {
  return (
    <Container maxW='container.xl'>
      <Box
        sx={{
          borderRadius: 'lg',
          bg: useColorModeValue('whiteAlpha.500', 'whiteAlpha.200'),
          p: 3,
          mb: 6,
          textAlign: 'center',
        }}
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
      <Flex justifyContent="center">
        <Image
          src="/images/profile.jpg"
          sx={{
            borderColor: 'whileAlpha.800',
            borderWidth: 2,
            borderStyle: 'solid',
            maxWidth: 100,
            borderRadius: 'full',
            aspectRatio: '1/1',
            objectFit: 'cover',
          }}
        />
      </Flex>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>Paragraph</p>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Ulaanbaatar, Mongolia.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed Bachelor in Software Engineering at Mongolian University of
          Science and Technology.
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Working at Unimedia Solutions LLC.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I {/* ♡ */} ♥
        </Heading>
        <Paragraph>
          Video games, Typing, Chess, Music.
        </Paragraph>
      </Section>
    </Container>
  )
}

export default HomeContainer
