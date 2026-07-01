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


## Uso de Inteligencia Artificial
El uso de la IA estuvo presente desde las primeras etapas del proyecto, colaborando en la planificación de la estructura de carpetas, la organización de los archivos y la definición del flujo de trabajo recomendado para construir una API REST. También fue utilizada para comprender el funcionamiento de Express, la creación de rutas, el manejo de solicitudes HTTP y la correcta separación de responsabilidades dentro del proyecto.
A lo largo del desarrollo se utilizó la IA para explicar el funcionamiento de cada fragmento de código implementado, permitiendo comprender el propósito de cada función, middleware, consulta SQL y endpoint antes de incorporarlo al proyecto. En lugar de limitarse a proporcionar código, se solicitó una explicación detallada de cada paso para favorecer el aprendizaje y comprender el funcionamiento interno de la aplicación.

También se utilizó para resolver errores que surgieron durante el desarrollo, como problemas relacionados con rutas de Express, manejo de parámetros, validaciones, respuestas HTTP, configuración de la conexión con PostgreSQL, utilización de Thunder Client para probar los endpoints y depuración de errores detectados durante las pruebas manuales.
Durante la etapa final del proyecto también brindó asistencia en la configuración de Git y GitHub, la gestión de commits, el manejo del repositorio remoto, la resolución de conflictos relacionados con el archivo .gitignore y la eliminación del archivo .env del repositorio para mantener la seguridad de las credenciales.

Finalmente, la inteligencia artificial fue utilizada para asistir en el despliegue completo del proyecto utilizando Railway, incluyendo la publicación de la API, la creación de una base de datos PostgreSQL en la nube, la configuración de las variables de entorno, la resolución de problemas de conexión entre la aplicación y la base de datos y la carga del esquema y los datos iniciales mediante los archivos schema.sql y seed.sql.

En todos los casos, la inteligencia artificial fue utilizada como una herramienta de apoyo al aprendizaje y a la resolución de problemas. Las decisiones de implementación fueron verificadas durante el desarrollo, realizando pruebas manuales y automatizadas para comprobar el correcto funcionamiento de cada funcionalidad antes de continuar con las siguientes etapas del proyecto. El uso de esta herramienta permitió comprender mejor los conceptos trabajados durante el módulo, reforzar el aprendizaje y desarrollar el proyecto de manera más organizada y eficiente.

## Prompts utilizados
Durante el desarrollo del proyecto se utilizaron distintos prompts para solicitar orientación técnica, resolver errores y comprender conceptos relacionados con el desarrollo backend. Algunos de los principales fueron:

- "Explícame paso a paso cómo implementar un CRUD para las entidades authors y posts utilizando Express y PostgreSQL."
- "Ayúdame a identificar y corregir errores en los endpoints de la API."
- "Explícame el funcionamiento de las consultas SQL parametrizadas y cómo implementarlas con la librería pg."
- "Guíame en la creación de pruebas automatizadas utilizando Jest y Supertest."
- "Ayúdame a documentar la API utilizando OpenAPI y Swagger."
- "Explícame el funcionamiento del código para comprender cada implementación antes de incorporarla al proyecto."
- "Ayúdame a desplegar la aplicación y la base de datos PostgreSQL en Railway."
- "Ayúdame a redactar un README completo y profesional para el repositorio."
- "Explícame cómo resolver los problemas de configuración entre Railway y PostgreSQL durante el despliegue."

Metodología de trabajo: durante el desarrollo se solicitó que las explicaciones fueran paso a paso, priorizando la comprensión del código antes que la copia de soluciones completas. El objetivo fue utilizar la inteligencia artificial como herramienta de aprendizaje y apoyo para la resolución de problemas, comprendiendo cada implementación antes de incorporarla al proyecto.
---

# Autor

**Florencia Narváez**


