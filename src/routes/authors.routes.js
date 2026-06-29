const express = require("express");
const pool = require("../db/pool");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM authors ORDER BY id"
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al obtener authors"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM authors WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Author no encontrado"
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al obtener author"
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, bio } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        error: "Name y email son obligatorios"
      });
    }

    const result = await pool.query(
      "INSERT INTO authors (name, email, bio) VALUES ($1, $2, $3) RETURNING *",
      [name, email, bio]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    if (error.code === "23505") {
      return res.status(400).json({
        error: "El email ya existe"
      });
    }

    res.status(500).json({
      error: "Error al crear author"
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, bio } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        error: "Name y email son obligatorios"
      });
    }

    const result = await pool.query(
      "UPDATE authors SET name = $1, email = $2, bio = $3 WHERE id = $4 RETURNING *",
      [name, email, bio, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Author no encontrado"
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    if (error.code === "23505") {
      return res.status(400).json({
        error: "El email ya existe"
      });
    }

    res.status(500).json({
      error: "Error al actualizar author"
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM authors WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Author no encontrado"
      });
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al eliminar author"
    });
  }
});
module.exports = router;

