const knex = require("knex")(require("../knexfile"));
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const exercises = await knex('exercises');
        res.json(exercises);
    } catch {
        res.status(400).json({
            message: 'Error gettting exercises'
        })
    }
});

module.exports = router;