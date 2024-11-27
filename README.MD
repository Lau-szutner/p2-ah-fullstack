# Aplicaciones Híbridas Examen Parcial II

## Spend Tracker

Spend Tracker es una aplicación full-stack hecha enteramente con MERN. El propósito de la misma es permitir que el usuario pueda crear anotaciones de los gastos realizados. El usuario puede **crear, leer, actualizar y eliminar** sus propios gastos (CRUD). También tiene la posibilidad de crear gastos compartidos introduciendo el correo electrónico de otros usuarios; estos gastos aparecerán en una vista llamada **Gastos compartidos**.

El usuario debe crear una cuenta y iniciar sesión para poder acceder a la aplicación. Esto generará un token que se guardará en las cookies para posteriores procesos de autenticación.

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instaladas las siguientes herramientas:

- Node.js (version recomendada: 18.x o superior)
- npm (incluido con Node.js)
- MongoDB en funcionamiento (puedes usar un servicio como MongoDB Atlas o una instalación local)

## Correr el Proyecto

Para ejecutar el proyecto, usa el siguiente comando desde la carpeta raíz del proyecto:

```bash
npm run start
```

Este comando ejecutará dos procesos simultáneamente para levantar tanto el backend como el frontend.

### package.json (Raíz)

```json
"scripts": {
  "start": "npm run start-client & npm run start-api",
  "start-client": "cd client && npm run dev",
  "start-api": "cd backend && npm run start"
}
```

### Información Esperada

Cuando ejecutes `npm run start`, deberías ver la siguiente información en la terminal:

```bash
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
Servidor corriendo en http://localhost:3000
Conexión con MongoDB exitosa
```

- **Local**: Esta es la URL donde podrás ver y usar la aplicación de manera completa, incluyendo tanto el cliente como el backend.
- **Servidor corriendo**: Esta línea indica que la versión original de la API está funcionando y proporciona un punto de referencia para la documentación de los endpoints, así como un mensaje de feedback de la conexión a la base de datos MongoDB.

## Notas Adicionales

- El token de autenticación se guarda en las cookies para mantener la sesión del usuario entre solicitudes.
- Para verificar que el token se maneja correctamente, asegúrate de que las cookies estén configuradas para que sean seguras y tengan una política de SameSite apropiada.

---
