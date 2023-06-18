'use client'
import {
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { useScroll } from 'framer-motion'
import React from 'react'
import Link from 'next/link'

import { AiOutlineHome, AiOutlineInbox, AiOutlineMenu, AiOutlineQuestion } from 'react-icons/ai'
import { FaMoon, FaSun } from 'react-icons/fa'

const Header = () => {
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const bg = useColorModeValue('white', 'gray.800')
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [y, setY] = React.useState(0)
  const height = ref.current ? ref.current.getBoundingClientRect() : 0

  const { scrollY } = useScroll()
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])
  const cl = useColorModeValue('gray.800', 'white')
  const mobileNav = useDisclosure()
  const logoColor = useColorModeValue('#4299e1', 'white')
  const topBarBottomColor = useColorModeValue('gray.200', 'gray.700')
  const PageLogo = () => {
    return (
      <Link href="/">
        <HStack>
          <svg id="logo-88" width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              className="ccustom"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.7146 0.516113C11.4582 0.516113 9.2943 1.41245 7.69881 3.00794L0 10.7067V14.2307C0 16.7204 1.06944 18.9603 2.77401 20.5161C1.06944 22.0719 0 24.3118 0 26.8015V30.3255L7.69881 38.0243C9.2943 39.6198 11.4582 40.5161 13.7146 40.5161C16.2043 40.5161 18.4442 39.4467 20 37.7421C21.5558 39.4467 23.7957 40.5161 26.2854 40.5161C28.5418 40.5161 30.7057 39.6198 32.3012 38.0243L40 30.3255V26.8015C40 24.3118 38.9306 22.0719 37.226 20.5161C38.9306 18.9603 40 16.7204 40 14.2307V10.7067L32.3012 3.00794C30.7057 1.41245 28.5418 0.516113 26.2854 0.516113C23.7957 0.516113 21.5558 1.58555 20 3.29012C18.4442 1.58555 16.2043 0.516113 13.7146 0.516113ZM25.7588 20.5161C25.6629 20.4286 25.5688 20.3387 25.4766 20.2465L20 14.7699L14.5234 20.2465C14.4312 20.3387 14.3371 20.4286 14.2412 20.5161C14.3371 20.6036 14.4312 20.6935 14.5234 20.7857L20 26.2623L25.4766 20.7857C25.5688 20.6935 25.6629 20.6036 25.7588 20.5161ZM22.2222 30.3255L22.2222 32.0085C22.2222 34.2525 24.0414 36.0717 26.2854 36.0717C27.363 36.0717 28.3965 35.6436 29.1585 34.8816L35.5556 28.4845V26.8015C35.5556 24.5575 33.7364 22.7383 31.4924 22.7383C30.4148 22.7383 29.3813 23.1664 28.6193 23.9284L22.2222 30.3255ZM17.7778 30.3255L11.3807 23.9284C10.6187 23.1664 9.58524 22.7383 8.50762 22.7383C6.26359 22.7383 4.44444 24.5575 4.44444 26.8015V28.4845L10.8415 34.8816C11.6035 35.6436 12.637 36.0717 13.7146 36.0717C15.9586 36.0717 17.7778 34.2525 17.7778 32.0085V30.3255ZM17.7778 9.02373V10.7067L11.3807 17.1038C10.6187 17.8658 9.58524 18.2939 8.50762 18.2939C6.26359 18.2939 4.44444 16.4747 4.44444 14.2307V12.5477L10.8415 6.15063C11.6035 5.38864 12.637 4.96056 13.7146 4.96056C15.9586 4.96056 17.7778 6.7797 17.7778 9.02373ZM28.6193 17.1038L22.2222 10.7067L22.2222 9.02373C22.2222 6.7797 24.0414 4.96056 26.2854 4.96056C27.363 4.96056 28.3965 5.38864 29.1585 6.15063L35.5556 12.5477V14.2307C35.5556 16.4747 33.7364 18.2939 31.4924 18.2939C30.4148 18.2939 29.3813 17.8658 28.6193 17.1038Z"
              fill={logoColor}
            ></path>
          </svg>
          <Text textDecoration={'none'}>Steven Hall</Text>
        </HStack>
      </Link>
    )
  }

  interface MobileNavProps {
    to: string
    icon: React.ReactElement
    label: string
  }
  const MobileNavButton = ({ to, icon, label }: MobileNavProps) => {
    return (
      <Link href={to} onClick={mobileNav.onClose}>
        <Button w="full" variant="ghost" leftIcon={icon}>
          {label}
        </Button>
      </Link>
    )
  }

  interface NavProps {
    to: string
    label: string
  }
  const NavButton = ({ to, label }: NavProps) => {
    return (
      <Link href={to}>
        <Button
          bg={bg}
          color="gray.500"
          display="inline-flex"
          alignItems="center"
          fontSize="md"
          _hover={{ color: cl }}
          _focus={{ boxShadow: 'none' }}
        >
          {label}
        </Button>
      </Link>
    )
  }

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? 'flex' : 'none'}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton aria-label="Close menu" justifySelf="self-start" onClick={mobileNav.onClose} />
      <MobileNavButton to={'/'} icon={<AiOutlineHome />} label={'Home'} />
      <MobileNavButton to={'/about'} icon={<AiOutlineQuestion />} label={'About'} />
      <MobileNavButton to={'/contact'} icon={<AiOutlineInbox />} label={'Contact'} />
    </VStack>
  )
  return (
    <React.Fragment>
      <chakra.header
        ref={ref}
        shadow={y > +height ? 'sm' : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="blue.400"
        borderBottom={'2px solid'}
        borderBottomColor={topBarBottomColor}
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" alignItems="center" justifyContent="space-between">
            <Flex align="flex-start">
              <PageLogo />
            </Flex>
            <Flex>
              <HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
                <NavButton to={'/'} label={'Home'} />
                <NavButton to={'/about'} label={'About'} />
                <NavButton to={'/contact'} label={'Contact'} />
              </HStack>
            </Flex>
            <Flex justify="flex-end" align="center" color="gray.400">
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: '0', md: '3' }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: 'inherit' }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  )
}
export default Header
