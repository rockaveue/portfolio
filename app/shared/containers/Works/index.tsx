import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '@src/components/Section'
import WorkGridItem from '@src/components/WorkGridItem'

const WorksContainer: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Heading as="h3" mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="esports" title="Esports" thumbnail="/images/ra.png">
            Esports
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="esports" title="Esports" thumbnail="/images/ra.png">
            Esports
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="esports" title="Esports" thumbnail="/images/ra.png">
            Esports
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default WorksContainer
