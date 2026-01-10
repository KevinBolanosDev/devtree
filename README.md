# DevTree 🌳

Backend para DevTree - Una aplicación tipo Linktree para desarrolladores.

## 📋 Descripción

DevTree es un servidor backend construido con Express.js y TypeScript que permite a los desarrolladores crear su propio árbol de enlaces personalizado, similar a Linktree pero orientado a la comunidad de desarrollo.

## 🛠️ Tecnologías

- **Node.js** - Entorno de ejecución
- **Express.js 5** - Framework web
- **TypeScript** - Tipado estático
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **dotenv** - Variables de entorno
- **tsx** - Ejecutor de TypeScript con hot-reload
- **ES Modules** - Sistema de módulos moderno

## 📦 Requisitos Previos

- Node.js (v18 o superior recomendado)
- npm
- MongoDB (local o MongoDB Atlas)

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/KevinBolanosDev/devtree.git
cd devtree
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno:

```bash
# Crea un archivo .env en la raíz del proyecto
MONGODB_URI=mongodb://localhost:27017/devtree
PORT=8000
```

4. Inicia el servidor en modo desarrollo:

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:8000/api`

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
│   ├── db/
│   │   └── db.ts     # Conexión a MongoDB
│   ├── index.ts      # Punto de entrada - Configuración del servidor
│   ├── server.ts     # Configuración de Express y middlewares
│   └── router.ts     # Definición de rutas API
├── dist/             # Código compilado (generado)
├── .env              # Variables de entorno (no incluido en git)
├── tsconfig.json     # Configuración de TypeScript
├── package.json      # Configuración y dependencias
└── README.md         # Documentación
```

## ⚙️ Variables de Entorno

| Variable      | Descripción                    | Ejemplo                             |
| ------------- | ------------------------------ | ----------------------------------- |
| `MONGODB_URI` | URI de conexión a MongoDB      | `mongodb://localhost:27017/devtree` |
| `PORT`        | Puerto del servidor (opcional) | `4000`                              |

## 🔜 Próximas Funcionalidades

- [x] Configuración de TypeScript
- [x] Estructura de carpetas organizada
- [x] Sistema de rutas (Router)
- [x] Conexión a base de datos (MongoDB)
- [x] Variables de entorno
- [ ] Sistema de autenticación
- [ ] API REST para gestión de enlaces
- [ ] Validación de datos
- [ ] Tests unitarios e integración

## 👤 Autor

**Kevin Dev**

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.
