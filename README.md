# 🚀 Plantilla Simple para dApps

Una plantilla moderna y responsive para crear aplicaciones descentralizadas (dApps) con **Next.js**, **Chakra UI** e integración de **Reown (WalletConnect)**.

## ✨ Características

- ⚛️ **Next.js 14** con App Router para desarrollo moderno
- 🎨 **Chakra UI** con diseño vibrante y gradientes coloridos
- 📱 **Completamente responsive** para móviles, tablets y desktop
- 🔗 **Integración con Reown AppKit** para conectar wallets
- 📌 **Header y Footer fijos** para mejor navegación
- 🎯 **Área de trabajo flexible** para tu contenido personalizado
- 🌈 **Tema personalizado** con colores vibrantes
- 🔐 **Variables de entorno** para configuración segura

## 🛠️ Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Configura las variables de entorno:
   - Copia el archivo `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```
   - Visita [https://cloud.reown.com](https://cloud.reown.com)
   - Crea una cuenta y obtén tu Project ID
   - Actualiza las variables en el archivo `.env`:
   ```env
   NEXT_PUBLIC_REOWN_PROJECT_ID=tu_project_id_real
   NEXT_PUBLIC_DAPP_NAME=Mi dApp
   NEXT_PUBLIC_DAPP_DESCRIPTION=Tu descripción
   NEXT_PUBLIC_DAPP_URL=https://tu-dapp.com
   ```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:3000`

## 📦 Estructura del Proyecto

```
template/
├── .env                          # Variables de entorno (no subir a git)
├── .env.example                  # Ejemplo de variables de entorno
├── next.config.js               # Configuración de Next.js
├── package.json                 # Dependencias del proyecto
└── app/
    ├── layout.jsx               # Layout principal de Next.js
    ├── page.jsx                 # Página principal
    ├── providers.jsx            # Providers de Chakra UI
    ├── theme.js                 # Tema personalizado de Chakra UI
    ├── components/
    │   ├── Header.jsx          # Componente del Header
    │   ├── Footer.jsx          # Componente del Footer
    │   └── WorkArea.jsx        # Área de trabajo principal
    └── config/
        └── reown.js            # Configuración de Reown AppKit
```

## 🎨 Personalización

### Cambiar el nombre de la dApp
Edita el archivo `.env`:
```env
NEXT_PUBLIC_DAPP_NAME=Tu Nombre de dApp
```

O edita directamente [app/components/Header.jsx](app/components/Header.jsx):
```jsx
<Heading>🚀 Mi dApp</Heading>
```

### Modificar los colores
En [app/theme.js](app/theme.js), ajusta los colores del tema:
```javascript
colors: {
  brand: { ... },
  purple: { ... },
  pink: { ... },
}
```

### Agregar funcionalidades
El área de trabajo principal está en [app/components/WorkArea.jsx](app/components/WorkArea.jsx). Puedes agregar tus propios componentes y funcionalidades dentro del componente.

### Configurar las redes blockchain
En [app/config/reown.js](app/config/reown.js), puedes modificar las redes disponibles:
```javascript
networks: [mainnet, arbitrum, polygon, optimism, base]
```

## 🌐 Redes Soportadas

- Ethereum Mainnet
- Arbitrum
- Polygon
- Optimism
- Base

Puedes agregar más redes importándolas desde `@reown/appkit/networks`.

## 📱 Responsive Design

La plantilla está optimizada para:
- 📱 Móviles (< 480px)
- 📱 Tablets (< 768px)
- 💻 Desktop (> 768px)

## 🔧 Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo en http://localhost:3000
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter de Next.js

## 🌍 Variables de Entorno

Todas las variables deben tener el prefijo `NEXT_PUBLIC_` para estar disponibles en el cliente:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `NEXT_PUBLIC_REOWN_PROJECT_ID` | ID del proyecto de Reown | `abc123...` |
| `NEXT_PUBLIC_DAPP_NAME` | Nombre de tu dApp | `Mi dApp` |
| `NEXT_PUBLIC_DAPP_DESCRIPTION` | Descripción de tu dApp | `Mi aplicación descentralizada` |
| `NEXT_PUBLIC_DAPP_URL` | URL de tu dApp | `https://tu-dapp.com` |
| `NEXT_PUBLIC_DAPP_ICON` | URL del icono de tu dApp | `https://...` |

## 📚 Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Chakra UI](https://chakra-ui.com)
- [Documentación de Reown](https://docs.reown.com)
- [Reown AppKit](https://docs.reown.com/appkit/overview)
- [Ethers.js](https://docs.ethers.org)

## 💡 Próximos Pasos

1. Configura las variables de entorno en `.env`
2. Conecta tu wallet usando el botón en el header
3. Agrega tus smart contracts en `app/config/reown.js`
4. Crea nuevos componentes en `app/components/`
5. Implementa tu lógica de negocio en el área de trabajo
6. Personaliza el tema en `app/theme.js` según tu marca

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Siéntete libre de crear un issue o pull request.

## 📄 Licencia

MIT - Siéntete libre de usar esta plantilla para tus proyectos.

---

Built with ❤️ by Developer
