import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
} from '@chakra-ui/react'

export default function WorkArea() {
  const cards = [
    {
      icon: '📊',
      title: 'Dashboard',
      description: 'Agrega tus métricas y estadísticas aquí',
    },
    {
      icon: '💼',
      title: 'Funcionalidades',
      description: 'Integra tus smart contracts y funciones',
    },
    {
      icon: '🎨',
      title: 'Personaliza',
      description: 'Adapta esta plantilla a tus necesidades',
    },
  ]

  return (
    <Box
      flex={1}
      mt={{ base: '140px', md: '100px' }}
      mb={{ base: '140px', md: '120px' }}
      py={8}
    >
      <Container maxW="container.xl">
        <Box
          bg="rgba(255, 255, 255, 0.05)"
          borderRadius="2xl"
          p={{ base: 6, md: 10 }}
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor="rgba(255, 255, 255, 0.1)"
          boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
        >
          <Heading
            size={{ base: 'xl', md: '2xl' }}
            mb={4}
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
          >
            Área de Trabajo
          </Heading>

          <Text fontSize={{ base: 'md', md: 'lg' }} mb={8} opacity={0.9}>
            Esta es tu área de trabajo para integrar cualquier funcionalidad de
            tu dApp.
          </Text>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: 4, md: 6 }}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                bg="rgba(255, 255, 255, 0.03)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.1)"
                borderRadius="xl"
                transition="all 0.3s ease"
                cursor="pointer"
                _hover={{
                  transform: 'translateY(-5px)',
                  bg: 'rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 12px 40px rgba(102, 126, 234, 0.3)',
                }}
              >
                <CardBody p={{ base: 6, md: 8 }}>
                  <Heading
                    size={{ base: 'md', md: 'lg' }}
                    mb={3}
                    bgGradient="linear(to-r, pink.400, purple.500)"
                    bgClip="text"
                  >
                    {card.icon} {card.title}
                  </Heading>
                  <Text opacity={0.8} fontSize={{ base: 'sm', md: 'md' }}>
                    {card.description}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}
