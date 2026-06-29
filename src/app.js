const postsRoutes = require("./routes/posts.routes");
const authorsRoutes = require("./routes/authors.routes");
const pool = require("./db/pool");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerDocument = YAML.load("./docs/openapi.yaml");

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/authors", authorsRoutes);
app.use("/posts", postsRoutes);

app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error conectando a PostgreSQL"
    });
  }
});

app.get("/", (req, res) => {
  res.json({
    message: "MiniBlog API funcionando"
  });
});

module.exports = app;
