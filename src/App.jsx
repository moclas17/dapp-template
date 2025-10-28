import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import WorkArea from './components/WorkArea'
import './config/reown'

function App() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <WorkArea />
      <Footer />
    </Box>
  )
}

export default App
