import { Box, Container, Text, Link, HStack } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={1000}
      bgGradient="linear(to-r, pink.500, pink.600)"
      boxShadow="0 -8px 32px 0 rgba(31, 38, 135, 0.37)"
      py={{ base: 4, md: 6 }}
    >
      <Container maxW="container.xl">
        <Box textAlign="center">
          <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium" mb={2}>
            Built with ❤️ by Developer
          </Text>

          <HStack
            spacing={{ base: 2, md: 4 }}
            justify="center"
            fontSize={{ base: 'xs', md: 'sm' }}
            flexWrap="wrap"
          >
            <Link
              href="https://github.com"
              isExternal
              fontWeight="medium"
              _hover={{ opacity: 0.7, textDecoration: 'underline' }}
            >
              GitHub
            </Link>
            <Text>•</Text>
            <Link
              href="https://twitter.com"
              isExternal
              fontWeight="medium"
              _hover={{ opacity: 0.7, textDecoration: 'underline' }}
            >
              Twitter
            </Link>
            <Text>•</Text>
            <Link
              href="mailto:developer@example.com"
              fontWeight="medium"
              _hover={{ opacity: 0.7, textDecoration: 'underline' }}
            >
              Contact
            </Link>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}
