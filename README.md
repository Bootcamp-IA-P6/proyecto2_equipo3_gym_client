# 🏋️‍♂️ GYMPRO - Sistema de Gestión 
#

### 📋 Descripción
**GYMPRO** Client es la interfaz de usuario moderna y reactiva diseñada para la gestión integral de gimnasios. Esta aplicación permite a los administradores y entrenadores gestionar el flujo de usuarios y clases de forma visual. Se conecta de manera eficiente a una API construida en Node.js para garantizar la persistencia de datos y seguridad. plataforma interactiva para la administración de entrenamientos y usuarios


![React](https://img.shields.io/badge/REACT-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/NODE.JS-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)

![Supabase](https://img.shields.io/badge/SUPABASE-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)


**API REST profesional para la gestión integral de entrenamientos y usuarios**


![Imagen](https://github.com/Bootcamp-IA-P6/proyecto2_equipo3_gym_client/blob/main/src/assets/images/Fondo.jpg?raw=true)

### 🎯 Objetivo del Proyecto
Desarrollar una plataforma web que permita a los gimnasios digitalizar y optimizar la gestión de sus servicios y clientes, centralizando la información en un solo sistema accesible y fácil de usar.
* El frontend tiene como objetivo ofrecer a los gimnasios una herramienta intuitiva y eficiente para administrar miembros, clases, entrenadores y planes de entrenamiento, mejorando la experiencia del usuario final y reduciendo la carga administrativa del personal.
---

---

### 💡 Beneficios Técnicos (Frontend Client)

* 1. Consistencia de Datos en la Interfaz
El frontend consume una única fuente de verdad desde la API. Cuando se actualiza la información de un entrenador, clase o usuario, los cambios se reflejan automáticamente en todas las vistas sin duplicar estados ni datos locales.

* 2. Gestión Clara de Roles y Vistas
La estructura del cliente permite diferenciar la experiencia según el rol del usuario (alumno, entrenador o administrador), mostrando únicamente las vistas y acciones correspondientes a cada perfil.

* 3. Trazabilidad Visual y Navegación Fluida
El frontend permite identificar de forma clara qué alumnos están inscritos en cada clase, quién es el entrenador asignado y el estado de cada sesión, facilitando el seguimiento y la toma de decisiones desde la interfaz.

* 1. Seguridad y Control de Acceso
El manejo centralizado de tokens JWT en el cliente permite proteger rutas, controlar sesiones y evitar accesos no autorizados, garantizando que la información sensible solo sea visible para usuarios autenticados.
---





### ✨ Características Principales

**👥 Gestión de Usuarios y Roles**
* ✅ **CRUD Completo:** Registro, consulta, edición y eliminación de Alumnos, Entrenadores y Administradores.
* ✅ **Control de Estado:** Visualización y gestión de usuarios activos e inactivos (altas/bajas).
* ✅ **Sistema de Roles:** Permisos diferenciados según el tipo de perfil dentro del sistema.

**📅 Control de Actividades**
* ✅ **Gestión de Clases:** Registro de clases, modificación, desactivación
* ✅ **Asignaciones:** Vinculación directa de entrenadores a clases específicas y alumnos 

**🛡️ Persistencia y Seguridad**
* ✅ **Sincronización Real-Time:** Integración con Supabase para actualización instantánea de datos.
* ✅ **Validación Estricta:** Uso de Pydantic para asegurar que los datos de entrada cumplan con los requisitos del negocio.
* ✅ **Seguridad JWT:** Infraestructura preparada para la validación de tokens y protección de rutas.




---

### 🚀 Tecnologías + frontend+ backend

| Categoría | Tecnologías |
| :--- | :--- |
| **Runtime** | Python 3.10+ |
| **Framework** | FastAPI |
| **Base de Datos** | Supabase (PostgreSQL) |
| **ORM** | SQLAlchemy |
| **React** | REACT |
| **Node Js** | Node Js |
| **Validación** | Pydantic |
| **Contenerización** | Docker, Docker Compose |
| **Servidor ASGI** | Uvicorn |

---

## 📦 Instalación

### 1️⃣ Instalar Node.js
Descarga e instala Node.js desde la página oficial. [Node.js] (https://nodejs.org/es) Una vez instalado, verifica la instalación abriendo una terminal y ejecutando:

node -v npm -v

### 2️⃣ Clona el repositorio
Desde la terminal, ubicate en la carpeta donde quieres clonar el repo git clone [GymPro]
(https://github.com/Bootcamp-IA-P6/proyecto2_equipo3_gym_client.git)


### 3️⃣ Instalar dependencias
Ejecuta el siguiente comando para instalar los paquetes necesarios:

npm install 
## ⏳ Este proceso puede tardar unos minutos.

### 4️⃣ Configurar variables de entorno
Crea el archivo de variables de entorno copiando el ejemplo:

 .env.example

## Luego, abre el archivo .env y agrega tus credenciales de Supabase, por ejemplo
* SUPABASE_URL=tu_url_de_supabase **SUPABASE_ANON_KEY=tu_anon_key
* Estas credenciales se obtienen desde el panel de Supabase en: Project Settings → API
* 

5️⃣ Conexión con Supabase
Crea un proyecto en Supabase

Usa la base de datos PostgreSQL que Supabase provee automáticamente, recuerda tambien clonar el backend para que este proyecto pueda levantar [Backend] https://github.com/Bootcamp-IA-P6/proyecto2_equipo3_gym_server.git

La aplicación se conectará usando las variables definidas en el archivo .env

6️⃣ Ejecutar el proyecto
Para iniciar el servidor en modo desarrollo en front con React:

npm start

Las migraciones y configuraciones necesarias se ejecutan automáticamente al iniciar.

📁 Estructura del Proyecto

### PROYECTO2_EQUIPO3_GYM_CLIENT/
```
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
│   ├── components/       # Componentes reutilizables/ por ejemplo, formularios, botones
│   │   ├── FormRegisterClass/
│   │   │   ├── FormRegisterClass.css
│   │   │   └── FormRegisterClass.jsx
│   │   ├── FormRegisterUsuario/
│   │   │   ├── FormRegisterUsuario.css
│   │   │   └── FormRegisterUsuario.jsx
│   │   ├── Modal/
│   │   └── Tables/
│   ├── pages/            # Vistas de página completa/ Interfaz grafica, visual para el cliente
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
```
## 🛡️ Seguridad en el Frontend (React)Para garantizar la integridad de la aplicación y la protección de los datos del usuario

| Categoría | Tecnologías |
| :--- | :--- |
| **🔄 Rotación de SecretosEl JWT_SECRET** | El JWT_SECRET se gestiona exclusivamente en el servidor; el cliente solo almacena el token resultante en memoria o HttpOnly cookies para evitar ataques XSS. |
| **🚫 Ocultación de Puertos** |En producción, el frontend se sirve a través de un proxy reverso (Nginx/Vercel) para no exponer el puerto de desarrollo ni la IP directa del servidor.|
| **📝 Rate Limiting Visual** | Implementación de throttling y debouncing en botones de acción (como "Registrar") para evitar múltiples peticiones accidentales desde la UI. |
| **📊 Monitoreo de Errores** |Uso de Error Boundaries en React para capturar fallos de renderizado y loguear incidentes sin romper la experiencia del usuario.|
| **🛡️ Headers & Sanitización** |Aunque Helmet.js es para Node, en React sanitizamos todas las entradas de los formularios antes de enviarlas a la API para prevenir inyecciones.|

## Equipo de desarrollo 
* Gema 
* Juan
* Iris
* Naiza
















 

