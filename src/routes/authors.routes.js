const express = require("express");
const pool = require("../db/pool");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM authors ORDER BY id");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener authors" });
  }
});

module.exports = router;
