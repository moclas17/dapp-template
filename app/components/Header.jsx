'use client'

import { Box, Flex, Heading, Container, HStack } from '@chakra-ui/react'
import ColorModeToggle from './ColorModeToggle'

export default function Header() {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bgGradient="linear(to-r, purple.600, purple.700)"
      boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
      backdropFilter="blur(10px)"
    >
      <Container maxW="container.xl">
        <Flex
          justify="space-between"
          align="center"
          py={4}
          gap={{ base: 2, md: 4 }}
        >
          <Heading
            size={{ base: 'md', md: 'xl' }}
            bgGradient="linear(to-r, white, gray.200)"
            bgClip="text"
            fontWeight="bold"
            whiteSpace="nowrap"
          >
            🚀 Mi dApp
          </Heading>

          <HStack spacing={{ base: 2, md: 3 }}>
            <ColorModeToggle />
            <appkit-button />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
