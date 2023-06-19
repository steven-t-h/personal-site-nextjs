'use client'
import HomeHero from '@/app/components/Home/Hero'
import ExperienceBox from '@/app/components/Home/ExperienceBox'
import { chakra, Container } from '@chakra-ui/react'
import { ExperiencePost, fetchExperiencePosts } from '@/contentful/experience'
import { useEffect, useState } from 'react'
import Loading from '@/app/components/Loading'

function Home() {
  const [experience, setExperience] = useState([]) as any[]

  useEffect(() => {
    async function fetchData() {
      const experienceEntries = await fetchExperiencePosts({
        preview: false,
      })
      setExperience(experienceEntries)
    }
    fetchData().then(() => {
      console.log('Experience fetched', experience)
    })
  }, [])

  return (
    <>
      <Container minW={'full'} mx={'auto'} py={4}>
        <chakra.div mx="auto" maxW="1200px">
          <HomeHero />
          {experience.length > 0 && (
            <>
              <ExperienceBox
                title={'Expert in these areas'}
                experience={getLevelExperience(experience, 1)}
                showDescription={true}
              />
              <ExperienceBox
                title={'Master of these skills'}
                experience={getLevelExperience(experience, 2)}
                showDescription={true}
              />
              <ExperienceBox
                title={'Other areas '}
                experience={getLevelExperience(experience, 3)}
                showDescription={false}
              />
            </>
          )}
          {experience.length === 0 && <Loading title={'Loading skills'} subtitle={'please wait...'} />}
        </chakra.div>
      </Container>
    </>
  )
}

export default Home

const getLevelExperience = (experience: ExperiencePost[], level: number) => {
  return experience.filter((exp) => exp.level === level)
}
