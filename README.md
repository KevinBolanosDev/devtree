# DevTree 🌳

Backend para DevTree - Una aplicación tipo Linktree para desarrolladores.

## 📋 Descripción

DevTree es un servidor backend construido con Express.js que permite a los desarrolladores crear su propio árbol de enlaces personalizado, similar a Linktree pero orientado a la comunidad de desarrollo.

## 🛠️ Tecnologías

- **Node.js** - Entorno de ejecución
- **Express.js 5** - Framework web
- **ES Modules** - Sistema de módulos moderno

## 📦 Requisitos Previos

- Node.js (v18 o superior recomendado)
- npm

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd devtree
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor:

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:8000`

## 📜 Scripts Disponibles

| Script        | Descripción                                          |
| ------------- | ---------------------------------------------------- |
| `npm start`   | Inicia el servidor en modo producción                |
| `npm run dev` | Inicia el servidor en modo desarrollo con hot-reload |
| `npm test`    | Ejecuta los tests (pendiente de configurar)          |

## 📁 Estructura del Proyecto

```
devtree/
├── index.js          # Punto de entrada de la aplicación
├── package.json      # Configuración y dependencias
├── package-lock.json # Lock de dependencias
└── README.md         # Documentación
```

## 🔜 Próximas Funcionalidades

- [ ] Configuración de TypeScript
- [ ] Conexión a base de datos
- [ ] Sistema de autenticación
- [ ] API REST para gestión de enlaces
- [ ] Validación de datos
- [ ] Tests unitarios e integración

## 👤 Autor

**Kevin Dev**

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.
