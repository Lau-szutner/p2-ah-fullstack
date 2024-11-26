# Aplicaciones Híbridas Examen Parcial II

## Correr el proyecto

```bash
npm run start
```

Esto desde la carpeta raiz del proyecto, este comando esta echo para correr 2 comandos, lo cuales levantan el backend y el cliente

**package.json**
Raiz

```bash
  "scripts": {
    "start": "npm run start-client & npm run start-api",
    "start-client": "cd client && npm run dev",
    "start-api": "cd backend && npm run start"
  }
```
