'use client'
import { chakra, Container, Heading, Text, Box } from '@chakra-ui/react'
const Contact = () => {
  return (
    <Container minW={'full'} mx={'auto'} py={4}>
      <chakra.div mx="auto" maxW="1200px">
        <Box boxShadow={'2xl'} rounded={'md'} p={6} mx={4} mb={16}>
          <Heading>Contact Me</Heading>
          <Text>Coming soon!</Text>
        </Box>
      </chakra.div>
    </Container>
  )
}

export default Contact
