'use client'

import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import WorkArea from './components/WorkArea'
import './config/reown'

export default function Home() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <WorkArea />
      <Footer />
    </Box>
  )
}
