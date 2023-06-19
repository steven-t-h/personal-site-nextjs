'use client'
import {
  Box,
  chakra,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react'
import ContactForm from '@/app/components/ContactForm'
const Contact = () => {
  return (
    <Container minW={'full'} mx={'auto'} py={4}>
      <chakra.div mx="auto" maxW="1200px">
        <Box boxShadow={'2xl'} rounded={'md'} p={6} mx={4} mb={16}>
          <ContactForm />
        </Box>
      </chakra.div>
    </Container>
  )
}

export default Contact
