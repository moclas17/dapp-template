import { Box, Flex, Heading, Container } from '@chakra-ui/react'

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
          gap={4}
          direction={{ base: 'column', md: 'row' }}
        >
          <Heading
            size={{ base: 'lg', md: 'xl' }}
            bgGradient="linear(to-r, white, gray.200)"
            bgClip="text"
            fontWeight="bold"
            textAlign={{ base: 'center', md: 'left' }}
          >
            🚀 Mi dApp
          </Heading>

          <appkit-button />
        </Flex>
      </Container>
    </Box>
  )
}
