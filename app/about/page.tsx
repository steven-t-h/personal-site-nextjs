'use client'
import { Box, Heading, Text, Container, chakra } from '@chakra-ui/react'
const About = () => {
  return (
    <Container minW={'full'} mx={'auto'} py={4}>
      <chakra.div mx="auto" maxW="1200px">
        <Heading>About</Heading>
        <Text>
          This site is meant to serve as my living resume. On the home page you'll get an overview of my developer
          skills.
        </Text>
      </chakra.div>
    </Container>
  )
}
export default About
