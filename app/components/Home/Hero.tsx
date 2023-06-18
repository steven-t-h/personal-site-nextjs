'use client'
import { Box, Code, Flex, Heading, Text } from '@chakra-ui/react'

export default function HomeHero() {
  return (
    <Box boxShadow={'2xl'} rounded={'md'} p={6} mx={4} minW={'60%'} mb={36}>
      <Text fontSize={'sm'} color={'blue.400'} ml={-2}>
        Hello world. My name is
      </Text>
      <Heading size={'2xl'} mb={2}>
        Steven Hall
      </Heading>
      <Box border={'2px solid'} borderColor={'blue.400'} rounded={'lg'} mt={4}>
        <Code p={2} colorScheme={'blue'}>
          <Text fontWeight={'bold'}>
            {`Senior IT Director. Full-Stack Developer. Experienced Solutions Architect.`}
          </Text>
          <br />
          {`I thrive in a fast-paced and highly technical leadership position where I can develop others while
					achieving meaningful business development. I am an expert in systems design, development, implementation,
					and integration; including various ERPs, CRMs, and WMS systems.I have led full IT teams, both
					on-prem and offshore, in establishing best-practices, achieving PCI compliance, and streamlining business
					systems. I have worked closely with Accounting (AP/AR/Costing/etc.), Marketing and Sales (B2C/B2B),
					IT Support, and Supply Chain on high-level systems and efficiency development. I believe in focusing
					on the betterment of the company through constant evaluation and dedication to increasing ease of
					use and end-to-end system integration.`}
          <br />
          <br />
          {`Personally, I enjoy photography, spending time with my animals, playing music, and playing ice hockey.`}
        </Code>
      </Box>
    </Box>
  )
}
