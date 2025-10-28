# 🚀 Plantilla Simple para dApps

Una plantilla moderna y responsive para crear aplicaciones descentralizadas (dApps) con **React**, **Chakra UI** e integración de **Reown (WalletConnect)**.

## ✨ Características

- ⚛️ **React 18** con Vite para desarrollo ultrarrápido
- 🎨 **Chakra UI** con diseño vibrante y gradientes coloridos
- 📱 **Completamente responsive** para móviles, tablets y desktop
- 🔗 **Integración con Reown AppKit** para conectar wallets
- 📌 **Header y Footer fijos** para mejor navegación
- 🎯 **Área de trabajo flexible** para tu contenido personalizado
- 🌈 **Tema personalizado** con colores vibrantes

## 🛠️ Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Obtén tu Project ID de Reown:
   - Visita [https://cloud.reown.com](https://cloud.reown.com)
   - Crea una cuenta y obtén tu Project ID
   - Reemplaza `TU_PROJECT_ID_AQUI` en `src/config/reown.js` con tu Project ID

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📦 Estructura del Proyecto

```
template/
├── index.html                    # HTML principal
├── vite.config.js               # Configuración de Vite
├── package.json                 # Dependencias del proyecto
└── src/
    ├── main.jsx                 # Punto de entrada de React
    ├── App.jsx                  # Componente principal
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
Edita [src/components/Header.jsx](src/components/Header.jsx):
```jsx
<Heading>🚀 Mi dApp</Heading>
```

### Modificar los colores
En [src/theme.js](src/theme.js), ajusta los colores del tema:
```javascript
colors: {
  brand: { ... },
  purple: { ... },
  pink: { ... },
}
```

### Agregar funcionalidades
El área de trabajo principal está en [src/components/WorkArea.jsx](src/components/WorkArea.jsx). Puedes agregar tus propios componentes y funcionalidades dentro del componente.

### Configurar las redes blockchain
En [src/config/reown.js](src/config/reown.js), puedes modificar las redes disponibles:
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

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción

## 📚 Recursos

- [Documentación de React](https://react.dev)
- [Chakra UI](https://chakra-ui.com)
- [Documentación de Reown](https://docs.reown.com)
- [Reown AppKit](https://docs.reown.com/appkit/overview)
- [Ethers.js](https://docs.ethers.org)
- [Vite](https://vitejs.dev)

## 💡 Próximos Pasos

1. Conecta tu wallet usando el botón en el header
2. Agrega tus smart contracts en `src/config/reown.js`
3. Crea nuevos componentes en `src/components/`
4. Implementa tu lógica de negocio en el área de trabajo
5. Personaliza el tema en `src/theme.js` según tu marca

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Siéntete libre de crear un issue o pull request.

## 📄 Licencia

MIT - Siéntete libre de usar esta plantilla para tus proyectos.

---

Built with ❤️ by Developer
