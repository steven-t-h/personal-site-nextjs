import { Box, CircularProgress, Stack, Text, useColorModeValue } from '@chakra-ui/react'

interface LoadingProps {
  title: string
  subtitle: string
}
const Loading = ({ title, subtitle }: LoadingProps) => {
  const textColor = useColorModeValue('blue.800', 'blue.200')
  return (
    <Box w={'full'} boxShadow={'2xl'} rounded={'md'} p={6} textAlign={'center'}>
      <Text color={textColor} textTransform={'uppercase'} fontWeight={'bold'} fontSize={'2xl'} letterSpacing={1.1}>
        {title}
      </Text>
      <Stack align={'center'} justify={'center'} direction={'column'} mt={10}>
        <Text color={textColor}>{subtitle}</Text>
        <CircularProgress isIndeterminate color={textColor} />
      </Stack>
    </Box>
  )
}

export default Loading
