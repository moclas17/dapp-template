import { Providers } from './providers'

export const metadata = {
  title: 'Mi dApp',
  description: 'Plantilla simple para dApps con Next.js y Chakra UI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
