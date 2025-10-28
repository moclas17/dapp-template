import { createAppKit } from '@reown/appkit'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { mainnet, arbitrum, polygon, optimism, base } from '@reown/appkit/networks'

// 1. Obtén tu projectId en https://cloud.reown.com
const projectId = 'TU_PROJECT_ID_AQUI'

// 2. Configura los metadatos de tu dApp
const metadata = {
  name: 'Mi dApp',
  description: 'Plantilla simple para dApps',
  url: 'https://tu-dapp.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// 3. Crea el modal de AppKit
const modal = createAppKit({
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

// 4. Escucha eventos de conexión
modal.subscribeEvents((event) => {
  console.log('AppKit Event:', event)
})

// 5. Obtener información de la wallet conectada
async function getWalletInfo() {
  const state = modal.getState()

  if (state.open) {
    console.log('Modal abierto')
  }

  // Cuando el usuario conecta su wallet
  const walletInfo = await modal.getWalletInfo()
  if (walletInfo) {
    console.log('Wallet conectada:', walletInfo)
  }
}

// Llamar la función cuando la página cargue
window.addEventListener('load', () => {
  console.log('dApp cargada correctamente')
  getWalletInfo()
})

// Exportar el modal para usarlo en otros archivos si es necesario
export { modal }
