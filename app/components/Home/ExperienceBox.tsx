'use client'
import ExperienceCard from '@/app/components/Home/ExperienceCard'
import { Box, Container, GridItem, Heading, SimpleGrid } from '@chakra-ui/react'

interface Experience {
  name: string
  logo: string | null
  description: string
}
interface ExperienceBoxProps {
  title: string
  experience: Experience[]
  showDescription: boolean
}
const ExperienceBox = ({ title, experience, showDescription }: ExperienceBoxProps) => {
  return (
    <Box boxShadow={'2xl'} rounded={'lg'} p={6} m={4} minW={'60%'}>
      <Heading pt={4} size={'lg'} mb={4}>
        {title}
      </Heading>
      <SimpleGrid columns={[1, 1, 1, 3]}>
        {experience.map((item) => {
          return (
            <Container key={item.name} mt={4}>
              <ExperienceCard
                name={item.name}
                logo={item.logo}
                description={item.description}
                showDescription={showDescription}
              />
            </Container>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

export default ExperienceBox
