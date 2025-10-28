import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#f5e9ff',
      100: '#dcc2ff',
      200: '#c49bff',
      300: '#ab74ff',
      400: '#934dff',
      500: '#7a26ff',
      600: '#6200ea',
      700: '#4a00b4',
      800: '#32007e',
      900: '#1a0048',
    },
    purple: {
      50: '#f5e9ff',
      100: '#e4ccff',
      200: '#d4afff',
      300: '#c292ff',
      400: '#b075ff',
      500: '#9e58ff',
      600: '#8b3bff',
      700: '#764ba2',
      800: '#5d3a7f',
      900: '#44295c',
    },
    pink: {
      50: '#ffe6f0',
      100: '#ffb3d4',
      200: '#ff80b8',
      300: '#ff4d9c',
      400: '#ff1a80',
      500: '#f5576c',
      600: '#e6004d',
      700: '#b3003b',
      800: '#80002a',
      900: '#4d0019',
    },
  },
  styles: {
    global: {
      body: {
        bg: '#1a1a2e',
        color: 'white',
      },
    },
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`,
    body: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'xl',
      },
      variants: {
        solid: {
          bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          _hover: {
            bg: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            transform: 'translateY(0)',
          },
        },
        gradient: {
          bgGradient: 'linear(to-r, purple.400, pink.500)',
          color: 'white',
          _hover: {
            bgGradient: 'linear(to-r, pink.500, purple.400)',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: 'xl',
          border: '1px solid',
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
})

export default theme
