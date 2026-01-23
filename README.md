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

Descarga e instala Node.js desde la página oficial. [https://nodejs.org/es] (https://nodejs.org/es)
Una vez instalado, verifica la instalación abriendo una terminal y ejecutando:

node -v
npm -v

### 2️⃣ Clonar el repositorio

Desde la terminal, ubucate en la carpeta dodne quieres clonar el repo

git clone [https://github.com/Codigo-Inmersion/codigo-abisal-server.git
cd codigo-abisal-server
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


6️⃣ Ejecutar el proyecto

Para iniciar el servidor en modo desarrollo en front con React:

npm start


Las migraciones y configuraciones necesarias se ejecutan automáticamente al iniciar.
