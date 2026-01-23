# 💻 GYMPRO - Frontend Client

### 📋 Descripción
GYMPRO Client es la interfaz de usuario moderna y reactiva diseñada para la gestión integral de gimnasios. Esta aplicación permite a los administradores y entrenadores gestionar el flujo de usuarios y clases de forma visual. 
Se conecta de manera eficiente a una API construida en Node.js para garantizar la persistencia de datos y seguridad.
 plataforma interactiva para la administración de entrenamientos y usuarios

### 🎯 Objetivo del Proyecto
Proporcionar una interfaz de usuario intuitiva y dinámica que permita la gestión visual del ciclo de vida de los usuarios (alumnos, entrenadores y administradores),
facilitando la inscripción a clases y la visualización de datos en tiempo real mediante una arquitectura de componentes escalable.

### 🚀 Tecnologías

| Categoría             | Tecnologías                 |
| :-------------------- | :-------------------------- |
| **Runtime**           | Node.js 18+                 |
| **Framework**         | React                       |
| **Base de Datos**     | Supabase                    |


### 📦 Instalación
###  1️⃣ Instalar Node.js

Descarga e instala Node.js desde la página oficial. [Node.js] (https://nodejs.org/es)
Una vez instalado, verifica la instalación abriendo una terminal y ejecutando:

node -v
npm -v

### 2️⃣ Clonar el repositorio

Desde la terminal, ubicate en la carpeta donde quieres clonar el repo

git clone [Github
](https://github.com/Bootcamp-IA-P6/proyecto2_equipo3_gym_client.git)

### 3️⃣ Instalar dependencias

Ejecuta el siguiente comando para instalar los paquetes necesarios:

npm install


###⏳ Este proceso puede tardar unos minutos.

###  4️⃣ Configurar variables de entorno

Crea el archivo de variables de entorno copiando el ejemplo:

cp .env.example .env


### Luego, abre el archivo .env y agrega tus credenciales de Supabase, por ejemplo:

**SUPABASE_URL=tu_url_de_supabase
**SUPABASE_ANON_KEY=tu_anon_key


Estas credenciales se obtienen desde el panel de Supabase en:
Project Settings → API

### 5️⃣ Conexión con Supabase

Crea un proyecto en Supabase

Usa la base de datos PostgreSQL que Supabase provee automáticamente, recuerda tambien clonar el backend 
para que este proyecto pueda levantar https://github.com/Bootcamp-IA-P6/proyecto2_equipo3_gym_server.git 

La aplicación se conectará usando las variables definidas en el archivo .env


### 6️⃣ Ejecutar el proyecto

Para iniciar el servidor en modo desarrollo en front con React:

npm start


Las migraciones y configuraciones necesarias se ejecutan automáticamente al iniciar.


### 📁 Estructura del Proyecto

PROYECTO2_EQUIPO3_GYM_CLIENT/
├── node_modules/         # Dependencias del proyecto
├── public/               # Archivos públicos estáticos
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/                  # Código fuente de la aplicación
│   ├── assets/           # Recursos (imágenes, fuentes)
│   ├── components/       # Componentes reutilizables
│   │   ├── FormRegisterClass/
│   │   │   ├── FormRegisterClass.css
│   │   │   └── FormRegisterClass.jsx
│   │   ├── FormRegisterUsuario/
│   │   │   ├── FormRegisterUsuario.css
│   │   │   └── FormRegisterUsuario.jsx
│   │   ├── Modal/
│   │   └── Tables/
│   ├── pages/            # Vistas de página completa
│   ├── routes/           # Configuración de navegación
│   ├── services/         # Servicios y llamadas a la API
│   ├── App.css           # Estilos principales
│   ├── App.js            # Componente raíz
│   ├── index.css         # Estilos globales
│   ├── index.js          # Punto de entrada de React
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .env.example          # Plantilla de variables de entorno
├── .gitignore            # Archivos ignorados por Git
├── package-lock.json     # Registro de versiones de dependencias
├── package.json          # Configuración de scripts y dependencias
└── README.md             # Documentación del proyecto


codigo-abisal-server/
├── src/
│   ├── controllers/         # Lógica de negocio
│   │   ├── ArticleController.ts
│   │   ├── AuthController.ts
│   │   ├── UserController.tss
│   │   └── PasswordResetController.ts
│   ├── middlewares/         # Middlewares personalizados
│   │   ├── authMiddlewares.ts
│   │   └── handleValidation.ts
│   ├── models/             # Modelos de Sequelize
│   │   ├── ArticleModel.ts
│   │   ├── UserModel.ts
│   │   └── PasswordResetToken.ts
│   ├── routes/             # Definición de rutas
│   │   ├── articleRoutes.ts
│   │   ├── authRoutes.ts
│   │   ├── userRoutes.ts
│   │   └── passwordReset.routes.ts
│   ├── validators/         # Validaciones con express-validator
│   │   ├── articleValidators.ts
│   │   ├── userValidators.ts
│   │   └── passwordResetValidators.ts
│   ├── utils/              # Utilidades
│   │   ├── jwt.ts
│   │   └── resetToken.ts
│   ├── database/           # Configuración DB
│   │   └── db_connection.ts
│   ├── interface/          # Interfaces TypeScript
│   │   ├── articleInterface.ts
│   │   └── userInterface.ts
│   └── app.ts              # Punto de entrada
├── test/                   # Tests
│   ├── auth.test.ts
│   ├── article.test.ts
│   └── jest.setup.ts
├── certs/                  # Certificados TLS
│   └── tidb-ca.pem
├── .github/workflows/      # CI/CD
│   └── docker-publish.yml
├── Dockerfile
├── docker-compose.yml
├── tsconfig.json
├── jest.config.mjs
├── package.json
└── README.md







