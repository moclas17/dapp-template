'use client'

import { IconButton, useColorMode, Tooltip } from '@chakra-ui/react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Tooltip label={colorMode === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}>
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
        onClick={toggleColorMode}
        variant="ghost"
        color="white"
        fontSize="xl"
        _hover={{
          bg: 'whiteAlpha.200',
          transform: 'scale(1.1)',
        }}
        transition="all 0.2s"
      />
    </Tooltip>
  )
}
