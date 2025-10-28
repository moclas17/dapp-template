import { createAppKit } from '@reown/appkit'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { mainnet, arbitrum, polygon, optimism, base } from '@reown/appkit/networks'

// 1. Obtén tu projectId en https://cloud.reown.com
const projectId = 'TU_PROJECT_ID_AQUI'

// 2. Configura los metadatos de tu dApp
const metadata = {
  name: 'Mi dApp',
  description: 'Plantilla simple para dApps con React y Chakra UI',
  url: 'https://tu-dapp.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// 3. Crea y exporta el modal de AppKit
export const modal = createAppKit({
  adapters: [new EthersAdapter()],
  networks: [mainnet, arbitrum, polygon, optimism, base],
  metadata,
  projectId,
  features: {
    analytics: true,
  },
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
