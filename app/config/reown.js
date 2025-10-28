'use client'

import { createAppKit } from '@reown/appkit'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { mainnet, arbitrum, polygon, optimism, base } from '@reown/appkit/networks'

// 1. Obtén las variables de entorno
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || 'TU_PROJECT_ID_AQUI'

// 2. Configura los metadatos de tu dApp desde variables de entorno
const metadata = {
  name: process.env.NEXT_PUBLIC_DAPP_NAME || 'Mi dApp',
  description: process.env.NEXT_PUBLIC_DAPP_DESCRIPTION || 'Plantilla simple para dApps con Next.js y Chakra UI',
  url: process.env.NEXT_PUBLIC_DAPP_URL || 'https://tu-dapp.com',
  icons: [process.env.NEXT_PUBLIC_DAPP_ICON || 'https://avatars.githubusercontent.com/u/37784886']
}

// 3. Crea y exporta el modal de AppKit con soporte ENS
// NOTA: ENS se resuelve automáticamente por Reown cuando:
// - El usuario está conectado a Ethereum Mainnet
// - El Project ID está correctamente configurado
// - La wallet tiene un ENS registrado
export const modal = createAppKit({
  adapters: [new EthersAdapter()],
  networks: [mainnet, arbitrum, polygon, optimism, base],
  defaultNetwork: mainnet,
  metadata,
  projectId,
  features: {
    analytics: true,
    socials: false,
    email: false,
    onramp: false,
  },
  allWallets: 'SHOW',
  featuredWalletIds: [
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // MetaMask
    '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0', // Trust Wallet
  ],
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#667eea',
    '--w3m-border-radius-master': '12px'
  }
})

// 4. Función para obtener información de la wallet conectada
export async function getWalletInfo() {
  try {
    const state = modal.getState()

    if (state.open) {
      console.log('Modal abierto')
    }

    const walletInfo = await modal.getWalletInfo()
    if (walletInfo) {
      console.log('Wallet conectada:', walletInfo)
      return walletInfo
    }
  } catch (error) {
    console.error('Error al obtener info de wallet:', error)
  }
  return null
}

// 5. Escucha eventos de conexión
modal.subscribeEvents((event) => {
  console.log('AppKit Event:', event)
})
