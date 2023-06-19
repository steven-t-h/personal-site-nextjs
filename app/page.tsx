'use client'
import HomeHero from '@/app/components/Home/Hero'
import ExperienceBox from '@/app/components/Home/ExperienceBox'
import { chakra, Container, Fade, SlideFade, useDisclosure } from '@chakra-ui/react'
import { ExperiencePost } from '@/app/api/contentful/experience'
import { useEffect, useState } from 'react'
import Loading from '@/app/components/Loading'

function Home() {
  const [experience, setExperience] = useState([]) as any[]
  const levelOne = useDisclosure()
  const levelTwo = useDisclosure()
  const levelThree = useDisclosure()

  useEffect(() => {
    async function fetchData() {
      const experienceEntries = await fetch('/api/contentful?model=experience').then((res) => res.json())
      setExperience(experienceEntries)
    }
    fetchData().then(() => {
      console.log('Experience fetched', experience)
      levelOne.onOpen()
      //Wait 3 seconds
      setTimeout(() => {
        levelTwo.onOpen()
      }, 500)
      //Wait 6 seconds
      setTimeout(() => {
        levelThree.onOpen()
      }, 1000)
    })
  }, [])

  return (
    <>
      <Container minW={'full'} mx={'auto'} py={4}>
        <chakra.div mx="auto" maxW="1200px">
          <Fade in={true}>
            <HomeHero />
          </Fade>
          {experience.length > 0 && (
            <>
              <SlideFade offsetX={180} in={levelOne.isOpen}>
                <ExperienceBox
                  title={'Expert in these areas'}
                  experience={getLevelExperience(experience, 1)}
                  showDescription={true}
                />
              </SlideFade>
              <SlideFade offsetX={-180} in={levelTwo.isOpen}>
                <ExperienceBox
                  title={'Master of these skills'}
                  experience={getLevelExperience(experience, 2)}
                  showDescription={true}
                />
              </SlideFade>
              <SlideFade offsetX={180} in={levelThree.isOpen}>
                <ExperienceBox
                  title={'Other areas '}
                  experience={getLevelExperience(experience, 3)}
                  showDescription={false}
                />
              </SlideFade>
            </>
          )}
          {experience.length === 0 && <Loading title={'Loading'} subtitle={'please wait...'} />}
        </chakra.div>
      </Container>
    </>
  )
}

export default Home

const getLevelExperience = (experience: ExperiencePost[], level: number) => {
  return experience.filter((exp) => exp.level === level)
}
