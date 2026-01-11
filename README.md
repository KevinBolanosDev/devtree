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
- **express-validator** - Validación de datos
- **bcrypt** - Encriptación de contraseñas
- **slug** - Generación de slugs para handles
- **dotenv** - Variables de entorno
- **tsx** - Ejecutor de TypeScript
- **nodemon** - Hot-reload en desarrollo

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

### Autenticación

| Método | Ruta                 | Descripción       | Body                                |
| ------ | -------------------- | ----------------- | ----------------------------------- |
| POST   | `/api/auth/register` | Registrar usuario | `{ handle, name, email, password }` |

## 📁 Estructura del Proyecto

```
devtree/
├── src/
│   ├── db/
│   │   └── db.ts           # Conexión a MongoDB
│   ├── models/
│   │   └── User.ts         # Modelo de usuario (Mongoose)
│   ├── handlers/
│   │   └── index.ts        # Controladores / Lógica de negocio
│   ├── utils/
│   │   └── auth.ts         # Utilidades de autenticación (bcrypt)
│   ├── router.ts           # Rutas + Validaciones (express-validator)
│   ├── server.ts           # Configuración de Express y middlewares
│   └── index.ts            # Punto de entrada del servidor
├── dist/                   # Código compilado (generado)
├── .env                    # Variables de entorno (no incluido en git)
├── tsconfig.json           # Configuración de TypeScript
├── package.json            # Configuración y dependencias
└── README.md               # Documentación
```

## 🔄 Arquitectura y Flujo de Datos

```
Router → Validations → Handler/Controller → Model → Database
```

### Responsabilidades por capa:

| Capa           | Responsabilidad                          | Ejemplo                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------ |
| **Router**     | Definir rutas + aplicar validaciones     | `router.post('/register', validations, handler)` |
| **Validators** | Reglas de validación (express-validator) | `body('email').isEmail()`                        |
| **Handlers**   | Lógica de negocio                        | `await User.save()`                              |
| **Models**     | Esquema de datos (Mongoose)              | `new Schema({...})`                              |
| **Utils**      | Funciones auxiliares reutilizables       | `hashPassword()`                                 |

## ⚙️ Variables de Entorno

| Variable      | Descripción                    | Ejemplo                             |
| ------------- | ------------------------------ | ----------------------------------- |
| `MONGODB_URI` | URI de conexión a MongoDB      | `mongodb://localhost:27017/devtree` |
| `PORT`        | Puerto del servidor (opcional) | `8000`                              |

## 🔐 Modelo de Usuario

```typescript
interface IUser {
  handle: string; // Username único (slug)
  name: string; // Nombre completo
  email: string; // Email único
  password: string; // Contraseña hasheada (bcrypt)
}
```

## 🔜 Próximas Funcionalidades

- [x] Configuración de TypeScript
- [x] Estructura de carpetas organizada
- [x] Sistema de rutas (Router)
- [x] Conexión a base de datos (MongoDB)
- [x] Variables de entorno
- [x] Modelo de usuario
- [x] Validación de datos (express-validator)
- [x] Encriptación de contraseñas (bcrypt)
- [ ] Login y autenticación JWT
- [ ] API REST para gestión de enlaces
- [ ] Tests unitarios e integración

## 👤 Autor

**Kevin Dev**

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.
