import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const toast = useToast()

  const onSubmit = handleSubmit((data) => {
    const { name, email, message, color } = data
    console.log(data)
    if (color) {
      errorToast('You are a robot!')
      reset()
      return
    }
    const body = {
      name,
      email,
      message,
    }
    fetch('/api/sendgrid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          errorToast(res.message)
          return
        }
        reset()
        successToast()
      })
      .catch((err) => {
        errorToast(err.message)
      })
  })

  const successToast = () => {
    toast({
      title: 'Message Sent',
      description: `Your message has been sent successfully! I'll get back to you as soon as I can.`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  }

  const errorToast = (msg: string) => {
    toast({
      title: 'Message Failed',
      description: msg,
      status: 'error',
      duration: 5000,
      isClosable: true,
    })
  }

  const formBorder = useColorModeValue('blue.200', 'blue.700')
  const formInputBorder = useColorModeValue('blue.700', 'blue.200')
  const textColor = useColorModeValue('blue.700', 'gray.200')
  return (
    <Box borderRadius="lg" w={'full'} mb={8} as={'form'} onSubmit={onSubmit}>
      <Wrap spacing={{ base: 10, sm: 3, md: 5, lg: 10 }} w={'full'}>
        <WrapItem>
          <Box>
            <Heading>Contact Me</Heading>
            <Text mt={2}>
              {`
              Want to chat? Feel free to fill out the quick form below to send me a message! I'll do my best to get back
              to you as quickly as possible.
              `}
            </Text>
          </Box>
        </WrapItem>
        <WrapItem w={'full'}>
          <Box
            border={'2px solid'}
            borderColor={formBorder}
            borderRadius="lg"
            w={'full'}
            mx={{
              sm: 0,
              md: 0,
              lg: 0,
              xl: 24,
            }}
          >
            <Box m={8} color={textColor}>
              <VStack spacing={5}>
                <FormControl id="contact-name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <InputGroup borderColor={formInputBorder}>
                    <InputLeftElement pointerEvents="none">
                      <AiOutlineUser />
                    </InputLeftElement>
                    <Input
                      type="text"
                      size="md"
                      placeholder={'What do I call you?'}
                      {...register('name', {
                        required: true,
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="contact-email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <InputGroup borderColor={formInputBorder}>
                    <InputLeftElement pointerEvents="none">
                      <AiOutlineMail />
                    </InputLeftElement>
                    <Input
                      type="text"
                      size="md"
                      placeholder={'youremail@example.com'}
                      {...register('email', {
                        required: true,
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="contact-message" isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    borderColor={formInputBorder}
                    placeholder={`Your message here...`}
                    resize={'vertical'}
                    {...register('message', { required: true })}
                  />
                </FormControl>
                <FormControl id="contact-favcol">
                  <Input
                    hidden={true}
                    type="text"
                    size="md"
                    placeholder={'What is your favorite color?'}
                    {...register('color', { required: false })}
                  />
                </FormControl>
                <Button type={'submit'} variant="solid" isLoading={isSubmitting}>
                  Send Message
                </Button>
              </VStack>
            </Box>
          </Box>
        </WrapItem>
      </Wrap>
    </Box>
  )
}

export default ContactForm
