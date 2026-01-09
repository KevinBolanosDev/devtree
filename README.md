# DevTree 🌳

Backend para DevTree - Una aplicación tipo Linktree para desarrolladores.

## 📋 Descripción

DevTree es un servidor backend construido con Express.js y TypeScript que permite a los desarrolladores crear su propio árbol de enlaces personalizado, similar a Linktree pero orientado a la comunidad de desarrollo.

## 🛠️ Tecnologías

- **Node.js** - Entorno de ejecución
- **Express.js 5** - Framework web
- **TypeScript** - Tipado estático
- **tsx** - Ejecutor de TypeScript con hot-reload
- **ES Modules** - Sistema de módulos moderno

## 📦 Requisitos Previos

- Node.js (v18 o superior recomendado)
- npm

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone <https://github.com/KevinBolanosDev/devtree.git>
cd devtree
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor en modo desarrollo:

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:4000/api`

## 📜 Scripts Disponibles

| Script          | Descripción                                          |
| --------------- | ---------------------------------------------------- |
| `npm run dev`   | Inicia el servidor en modo desarrollo con hot-reload |
| `npm run build` | Compila TypeScript a JavaScript                      |
| `npm start`     | Inicia el servidor en modo producción (compilado)    |
| `npm test`      | Ejecuta los tests (pendiente de configurar)          |

## 🌐 Endpoints API

| Método | Ruta            | Descripción     |
| ------ | --------------- | --------------- |
| GET    | `/api`          | Hello World     |
| GET    | `/api/nosotros` | Página Nosotros |
| GET    | `/api/blog`     | Página Blog     |

## 📁 Estructura del Proyecto

```
devtree/
├── src/
│   ├── index.ts      # Punto de entrada - Configuración del servidor
│   ├── server.ts     # Configuración de Express
│   └── router.ts     # Definición de rutas API
├── dist/             # Código compilado (generado)
├── tsconfig.json     # Configuración de TypeScript
├── package.json      # Configuración y dependencias
└── README.md         # Documentación
```

## 🔜 Próximas Funcionalidades

- [x] Configuración de TypeScript
- [x] Estructura de carpetas organizada
- [x] Sistema de rutas (Router)
- [ ] Conexión a base de datos
- [ ] Sistema de autenticación
- [ ] API REST para gestión de enlaces
- [ ] Validación de datos
- [ ] Tests unitarios e integración

## 👤 Autor

**Kevin Dev**

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.
