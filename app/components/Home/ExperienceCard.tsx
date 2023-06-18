import { Box, Text, Image, Stack, useColorModeValue } from '@chakra-ui/react'

interface ExperienceProps {
  name: string
  logo: string | null
  description: string
  showDescription: boolean
}

const ExperienceCard = ({ name, logo, description, showDescription }: ExperienceProps) => {
  const cardBg = useColorModeValue('blue.100', 'blue.700')
  const imgSize = showDescription ? '64px' : '48px'
  return (
    <Box
      rounded={'lg'}
      border={'1px solid'}
      borderColor={'blue.400'}
      p={4}
      minH={'full'}
      _hover={{ background: cardBg }}
    >
      <Stack direction={['column', 'row']} spacing={4} verticalAlign={'center'}>
        <Image boxSize={imgSize} src={logo || ''} alt={name} my={2} />
        <Text fontSize={'lg'} fontWeight={'bold'} mt={4}>
          {name}
        </Text>
      </Stack>
      {showDescription && <Text>{description}</Text>}
    </Box>
  )
}

export default ExperienceCard
