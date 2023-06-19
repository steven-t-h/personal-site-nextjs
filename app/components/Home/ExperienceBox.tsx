'use client'
import ExperienceCard from '@/app/components/Home/ExperienceCard'
import { Box, Container, GridItem, Heading, SimpleGrid } from '@chakra-ui/react'
import { ExperiencePost } from '@/contentful/experience'

interface ExperienceBoxProps {
  title: string
  experience: ExperiencePost[]
  showDescription: boolean
}
const ExperienceBox = ({ title, experience, showDescription }: ExperienceBoxProps) => {
  const experienceCount = experience.length
  if (experienceCount === 0) {
    return null
  }
  return (
    <Box boxShadow={'2xl'} rounded={'lg'} p={6} m={4} minW={'60%'}>
      <Heading pt={4} size={'lg'} mb={4}>
        {title}
      </Heading>
      <SimpleGrid columns={[1, 1, 1, 3]}>
        {experience.map((item) => {
          return (
            <Container key={item.name} mt={4}>
              <ExperienceCard {...item} showDescription={showDescription} />
            </Container>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

export default ExperienceBox
