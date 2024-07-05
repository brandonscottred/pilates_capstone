const knex = require("knex")(require("../knexfile"));
const express = require("express");
const router = express.Router();

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    JsonWebTokenError.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
}

// Exercises ENDPOINTS
router.get("/", authenticateToken, async (req, res) => {
    try {
        const exercises = await knex('exercises');
        if (exercises) {
            res.status(200).json(exercises);
        } else {
            res.status(400).json({
                message: 'Error gettting exercises'
            })
        } 
    } catch (err) {
            res.status(500).send(`Error retrieving exercises: ${err}`);
    }
});

router.get("/:id", authenticateToken, async (req, res) => {
    try {
        const exercises = await knex('exercises');
        const exerciseId = req.params.id;
        const exercise = exercises.find((exercise) => exercise.exercise_id == exerciseId);
        if (exercise) {
            res.json(exercise);
        } else {
            res.status(404).json(`Exercise id: ${exerciseId} does not exist`);
        }
    } catch (err) {
        res.status(500).send(`Error retrieving exercise: ${err}`);
    }
});

// Comments ENDPOINTS
router.get("/:id/comments", authenticateToken, async (req, res) => {
    try {
        const commentsTable = await knex('comments');
        const exerciseId = req.params.id;
        const allComments = commentsTable.find((allComments) => allComments.exercise_id == exerciseId);
        if (allComments) {
            res.status(200).json(allComments);
        } else {
            res.status(404).json(`Comments under exercise id: ${exerciseId} not found`);
        }
    } catch (err) {
            res.status(500).send(`Error retrieving comments: ${err}`);
    }
});

router.post("/:id/comments", authenticateToken, async (req, res) => {
    try {
        const commentsTable = await knex('comments');        

        const {
            exercise_id,
            user_id,
            comment_text
        } = req.body;

        const requiredProps = [
            "exercise_id",
            "user_id",
            "comment_text"
        ];

        const missingProps = requiredProps.filter
        ((prop) => !req.body.hasOwnProperty(prop));
        if (missingProps.length > 0) {
            return res
                .status(400)
                .json({ error: `Missing properties: ${missingProps.join(", ")}` })
        }

        insertedComment = commentsTable.insert({
            exercise_id,
            user_id,
            comment_text
        });

        res.status(201).json({ message: "Comment posted successfully", comment: insertedComment });

    } catch (err) {
        res.status(500).send(`Error posting comment: ${err}`);
    }
});



module.exports = router;