# MiniBlog API

API REST desarrollada con Node.js, Express y PostgreSQL para gestionar autores y publicaciones de un blog. Incluye operaciones CRUD completas, documentación con Swagger, pruebas automatizadas y despliegue en Railway.

---

# Funcionalidades

- CRUD completo de autores.
- CRUD completo de publicaciones.
- Relación entre autores y publicaciones.
- Documentación interactiva con Swagger.
- Pruebas automatizadas con Jest y Supertest.
- Despliegue en Railway.

---

# Tecnologías

- Node.js
- Express
- PostgreSQL
- pg
- Swagger UI Express
- YAML
- Jest
- Supertest
- Railway
- Git y GitHub

---

# Estructura del proyecto

```
MiniBlogAPI/
│
├── docs/
│   └── openapi.yaml
├── sql/
│   ├── schema.sql
│   └── seed.sql
├── src/
│   ├── db/
│   ├── routes/
│   ├── app.js
│   └── server.js
├── tests/
├── package.json
└── README.md
```

---

# Instalación

Clonar el repositorio:

```bash
git clone https://github.com/florencianarvaez/MiniBlogAPI.git
```

Entrar al proyecto:

```bash
cd MiniBlogAPI
```

Instalar dependencias:

```bash
npm install
```

Crear un archivo `.env` con:

```env
DB_USER=...
DB_PASSWORD=...
DB_HOST=...
DB_PORT=...
DB_NAME=...
```

Crear las tablas ejecutando:

```
sql/schema.sql
```

Cargar datos de prueba:

```
sql/seed.sql
```

---

# Ejecutar la aplicación

```bash
npm start
```

Modo desarrollo:

```bash
npm run dev
```

---

# Ejecutar pruebas

```bash
npm test
```

---

# Variables de entorno

| Variable | Descripción |
|----------|-------------|
| DB_HOST | Host de PostgreSQL |
| DB_PORT | Puerto |
| DB_USER | Usuario |
| DB_PASSWORD | Contraseña |
| DB_NAME | Base de datos |

---

# Documentación Swagger

Disponible en:

https://miniblogapi-production-022d.up.railway.app/api-docs

---

# API desplegada

https://miniblogapi-production-022d.up.railway.app/

---

# Endpoints

## Authors

- GET /authors
- GET /authors/:id
- POST /authors
- PUT /authors/:id
- DELETE /authors/:id

## Posts

- GET /posts
- GET /posts/:id
- POST /posts
- PUT /posts/:id
- DELETE /posts/:id

---

# Autor

**Florencia Narváez**

Proyecto desarrollado como práctica de una API REST utilizando Node.js, Express y PostgreSQL.
