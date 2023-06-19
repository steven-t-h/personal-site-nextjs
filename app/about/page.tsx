'use client'
import {
  Box,
  chakra,
  Container,
  Heading,
  List,
  ListItem,
  OrderedList,
  ScaleFade,
  SlideFade,
  Text,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { SoftSkillValue } from '@/app/api/contentful/softskills'
import Link from 'next/link'
import Loading from '@/app/components/Loading'

const About = () => {
  const iconColor = useColorModeValue('blue.700', 'blue.200')
  const linkColor = useColorModeValue('blue.700', 'blue.200')
  const bulletListColor = useColorModeValue('gray.700', 'gray.200')
  const [skills, setSkills] = useState<SoftSkillValue[]>([])
  const [paddingSize, setPaddingSize] = useState<number>(64)

  useEffect(() => {
    async function fetchData() {
      setSkills([])
      const skillEntries = await fetch('/api/contentful?model=softSkills').then((res) => res.json())
      //add each item to the array with a .2s delay
      skillEntries.forEach((entry: SoftSkillValue, index: number) => {
        setTimeout(() => {
          setSkills((prev) => [...prev, entry])
        }, index * 30)
      })
    }
    fetchData().then(() => {
      console.log('Skills fetched', skills)
    })
  }, [])

  // function to reduce paddingSize to 0 over 4 seconds.

  return (
    <Container minW={'full'} mx={'auto'} py={4}>
      <chakra.div mx="auto" maxW="1200px">
        <Box boxShadow={'2xl'} rounded={'md'} p={6} mx={4} mb={16}>
          <Heading>About Me</Heading>
          <Text mt={2}>
            {`This site is meant to serve as my living resume. It is built with `}
            <Link href={'https://nextjs.org'} target={'_blank'}>
              <Text color={linkColor} as={'span'} fontWeight={'bold'}>
                Next.js
              </Text>
            </Link>
            {', '}
            <Link href={'https://chakra-ui.com/'} target={'_blank'}>
              <Text color={linkColor} as={'span'} fontWeight={'bold'}>
                Chakra UI
              </Text>
            </Link>
            {', and '}
            <Link href={'https://www.contentful.com/'} target={'_blank'}>
              <Text color={linkColor} as={'span'} fontWeight={'bold'}>
                Contentful
              </Text>
            </Link>
            {`. On the home page you'll get an overview of my developer
          skills. In addition to my expertise in those areas, I have a strong background in the following:`}
          </Text>
          {skills.length > 0 && (
            <UnorderedList spacing={3} ml={24} my={6} maxW={'full'}>
              {skills.map((skill) => {
                return (
                  <SlideFade key={skill.position} offsetX={180} in={skills.length > 0}>
                    <ListItem>
                      <Text color={bulletListColor} as={'span'} fontWeight={'bold'}>
                        {skill.skill}
                      </Text>
                    </ListItem>
                  </SlideFade>
                )
              })}
            </UnorderedList>
          )}
          <Text>
            {`Throughout my career, as both a Full Time Employee and a Consultant, I have focused on bringing value to my employers and clients.
            I believe in focusing on the business needs and goals, and then using technology to achieve those goals. My wide range of experience
            is helpful in identifying the best tools for the job, budget, and staff expertise.`}
          </Text>
        </Box>
      </chakra.div>
    </Container>
  )
}
export default About

/*
<ListItem>Agile Methodologies</ListItem>
            <ListItem>Project Management</ListItem>
            <ListItem>Accounting & Finance</ListItem>
            <ListItem>Team Leadership</ListItem>
            <ListItem>Business Analysis</ListItem>
            <ListItem>Technical Writing</ListItem>
            <ListItem>Technical Training</ListItem>
            <ListItem>Technical Support</ListItem>
            <ListItem>Customer Service</ListItem>
 */
