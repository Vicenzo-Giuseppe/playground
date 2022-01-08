import { Box, Link, Text, Flex, useColorMode,BoxProps, Stack, SimpleGrid,  useColorModeValue, useDisclosure, VStack, CloseButton, Button, IconButton as IconButtonChakra, HStack, Spacer, IconButton, SlideFade, Collapse, Container } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import React, { useState } from 'react'
import { Suspense } from "react"
import logout from "app/auth/mutations/logout"
import { AiOutlineMenu, AiOutlineInbox, AiFillHome } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillCameraVideoFill } from "react-icons/bs"
import  Logo  from './Logo'
import { motion, AnimatePresence, isValidMotionProp } from "framer-motion"
import { Routes, Link as LinkB, useMutation } from "blitz"

interface SectionProps { 
  title: string,
  icon: React.ReactElement,
  children: React.ReactNode, 
}

const UserInfo = () => {
  const User = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (User) {
    
    return (
      <>
        <Button
    
        colorScheme="brand" 
        variant="ghost" 
        size="sm" 
        onClick={async () => {
            await logoutMutation()
          }}
        >
          SignOut
        </Button>
       
      </>
    )
  } else {
    return (
      <>
          <LinkB href={Routes.SignupPage()}>
              <Button colorScheme="brand" variant="ghost" size="sm" >
                Sign in
              </Button>
              </LinkB>
      </>
    )
  }
}

export default function Header() {
  const MotionBox = motion<BoxProps>(Box)
  const desktopNav = useDisclosure()
  const mobileNav = useDisclosure()
  const { toggleColorMode: toggleMode } = useColorMode()
  const bg = useColorModeValue("white", "gray.800")
  const sct = useColorModeValue("gray.100", "gray.700")
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const ic = useColorModeValue("brand.600", "brand.50")
  const hbg = useColorModeValue("aquamarine.100", "aquamarine.700")
  const tcl = useColorModeValue("gray.900", "gray.50")
  const dcl = useColorModeValue("gray.500", "gray.50")
  

  const variantss = {
    open:{
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: .6 },
    },
    initial: {
      opacity: 0.2,
      y: -90,
    },

exit: {
  y: 0 ,
  color: "black",
},
    hover: {
     scale: 1.025
    },
    tap: {
      scale: 0.925
     },
  };
  

  const Section = (props: SectionProps) => {
    return (
   
      <Card variant='aqua'>
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{ bg: '#83c9bc' }}
      pt={0}
    
      >
        <chakra.svg
          flexShrink={0}
          h={6}
          w={6}
          color={ic}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </chakra.svg>
        <Box ml={4}>
          <BoxItem >
            {props.title}
          </BoxItem>
          <Text mt={1} fontSize="sm" color={dcl}>
            {props.children}
          </Text>
        </Box>
      </Link>
      </Card>
  
    );
  };
  const SectionBox = motion<SectionProps>(Section)
  const Features = (
    <Container maxW='80%'>
    <AnimatePresence initial={false}>
    <MotionBox   
    whileHover='hover'
    initial='initial'
    animate={desktopNav.isOpen ? "open" : "exit"}
    variants={variantss}
  pt='1.6rem'

  layout
    
    >
      
      <SimpleGrid
        columns={{ base: 1, md: 3, lg: 4 }}
        pos="relative"
     
        gap={{ base: 6, sm: 8 }}
        px={5}
        py={6}
    
        p={{ sm: 8 }}
      >
        <SectionBox
          title="Analytics"
        
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-w="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          }
        >
          Get a better understanding of where your traffic is coming from.
        </SectionBox>

        <SectionBox
          title="Engagement"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-w="2"
              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
            />
          }
        >
          Speak directly to your customers in a more meaningful way.
        </SectionBox>

        <SectionBox
          title="Security"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-w="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          }
        >
          Your customers&#039; data will be safe and secure.
        </SectionBox>
        <SectionBox
          title="Integrations"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-w="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          }
        >
          Connect with third-party tools that you&#039;re already using.
        </SectionBox>
      </SimpleGrid>
      
    </MotionBox>
    </AnimatePresence>
    </Container>
  );

  const MobileNavContent = (
    
    <VStack

    pos="absolute"
    top={0}
   
    right={0}
    h='full'
    w='full'
    display={mobileNav.isOpen ? "flex" : "none"}
    flexDirection="column"
    p={2}
    pb={4}
    m={2}
    bg={bg}
    spacing={3}
    rounded="sm"
    shadow="sm"
  >
   <SimpleGrid columns={1} spacing={2}>
    <CloseButton
      aria-label="Close menu"
      justifySelf="center"
      onClick={mobileNav.onClose}
    />



<Button w="full" justifySelf="center" variant="ghost"  leftIcon={<AiFillHome />} >
      Menu
    </Button>
    <Button
      w="full"
      variant="ghost"
      colorScheme="brand"
      
      leftIcon={<AiOutlineInbox />}
      fontFamily='Roboto'
    >
      About
    </Button>
    <Button
   
      variant="ghost"
     
      leftIcon={<BsFillCameraVideoFill />}
    >
      Pricing
    </Button>
    </SimpleGrid>
  </VStack>
  );




  return (
      <Card h="full" w="full" px={{ base: 2, sm: 4 }} py={4} pb={desktopNav.isOpen ? "9.35rem" : "1rem"}>
        <Flex alignItems="center" justifyContent="space-between" mx="auto" pb={mobileNav.isOpen ? "8rem" : "none"}>
          <Box display={{ base: "none", md: "inline-flex" }}>
            <HStack spacing={1}>
              <Card 
              bgColor='white'
              role="group"       
              onMouseEnter={desktopNav.onOpen}
              onMouseLeave={desktopNav.onClose}
              
     
                >

                <BoxItem > <Logo/> </BoxItem>
                <BoxItem boxSize='3.5rem' as={IconButton} icon={<IoIosArrowDown size='2.6rem'/>} ></BoxItem>
                <BoxItem  >Aa</BoxItem>


               
                <Box
                  pos="absolute"
                  left={0}
                  w="full"
                  display="none"
                  _groupHover={{ display: "block" }}
                >
                      <Collapse in={desktopNav.isOpen} >   
                  {Features }
                  </Collapse>
                </Box>
        
              </Card>
            

            </HStack>
          </Box>
          <Spacer />
      
          <Box display="flex" alignItems="center">
            <HStack spacing={1}>
              <Suspense fallback={<div>Loading...</div>}>
             <UserInfo/>
             </Suspense>
            </HStack>
            <LightSwitch
                             variant="ghost"
                     aria-label={`Switch to ${text} mode`}
                 onClick={toggleMode}
                 icon={<SwitchIcon />}
            />
            <MobileMenu

              aria-label="Open menu"
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
          
            />
          </Box>
      
        </Flex>

        {MobileNavContent}
      </Card>

  )
}


import {
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
   ComponentWithAs,
   forwardRef,
   chakra,
   IconButtonProps
} from '@chakra-ui/react'


interface Props extends BoxProps{
  icon?: any,
  size?: any,
  variant?: any,
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}
const Card: React.FunctionComponent<Props> = (
  {onClick, variant,children, size, ...props }
  )  => {

const styles = useMultiStyleConfig('Card', { size, variant })

    return (
    <Flex
 
    __css={styles.Card} 
        {...props}
        >
               <StylesProvider value={styles}>{children}</StylesProvider> 
        </Flex>
   
)
}

const BoxItem: React.FunctionComponent<Props>= (
 {variant,size, ...props}
) => { 
  const styles =  useStyles()
  console.log(styles)
  const BoxItem = motion(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
      )
      return <Box ref={ref} {...chakraProps} />
    }),
  )
  return <BoxItem as='button'  __css={styles.BoxItem} sx={styles.BoxItem} {...props} />
}

const LightSwitch: ComponentWithAs<'button', IconButtonProps> = (
  {...props}
) => {
  const styles = useMultiStyleConfig('IconButton', {...props})

  return <IconButtonChakra as='button' sx={styles.SwitchIcon} {...props}></IconButtonChakra>
}

const MobileMenu: ComponentWithAs<'button', IconButtonProps> = (
  {...props}
) => {
  const styles = useMultiStyleConfig('IconButton', {...props})

  return <IconButtonChakra as='button' sx={styles.MobileMenu} {...props}></IconButtonChakra>
}


export { Card, BoxItem, LightSwitch, MobileMenu}