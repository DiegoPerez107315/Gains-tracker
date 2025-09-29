# Gains Tracker

Aplicación web para tener control sobre ganancias en plataformas de transporte para aplicar estrategias generadoras de ganancias.

## 🚀 Tecnologías

- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Build tool y desarrollo rápido
- **Tailwind CSS** - Framework de CSS utilitario
- **Vercel** - Plataforma de deployment

## 📋 Requisitos

- Node.js 16+ 
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/DiegoPerez107315/Gains-tracker.git
cd Gains-tracker
```

2. Instala las dependencias:
```bash
npm install
```

## 🏃‍♂️ Desarrollo

Para ejecutar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🏗️ Build

Para construir la aplicación para producción:

```bash
npm run build
```

Para previsualizar el build de producción:

```bash
npm run preview
```

## 🔍 Linting

Para verificar el código TypeScript:

```bash
npm run lint
```

## 🚀 Deployment en Vercel

### Opción 1: Vercel CLI
1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones

### Opción 2: GitHub Integration
1. Conecta tu repositorio con Vercel
2. Vercel detectará automáticamente la configuración de Vite
3. Deploy automático en cada push

## 📁 Estructura del Proyecto

```
├── src/
│   ├── main.ts          # Punto de entrada de la aplicación
│   └── style.css        # Estilos con Tailwind CSS
├── index.html           # HTML principal
├── package.json         # Dependencias y scripts
├── tsconfig.json        # Configuración de TypeScript
├── tailwind.config.js   # Configuración de Tailwind CSS
├── postcss.config.js    # Configuración de PostCSS
├── vite.config.ts       # Configuración de Vite
├── vercel.json          # Configuración de Vercel
└── README.md           # Este archivo
```

## 🎯 Características Actuales

- ✅ Interfaz moderna y responsive
- ✅ Panel de control para ganancias
- ✅ Métricas básicas (Ganancias totales, Viajes hoy, Promedio/hora)
- ✅ Botones para agregar viajes y ver estadísticas
- ✅ Soporte para tema claro/oscuro

## 🔮 Próximas Características

- [ ] Funcionalidad para agregar y editar viajes
- [ ] Gráficos y estadísticas detalladas
- [ ] Gestión de múltiples plataformas de transporte
- [ ] Calculadora de estrategias de ganancias
- [ ] Exportación de datos

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerir cambios o mejoras.

## 📄 Licencia

ISC
