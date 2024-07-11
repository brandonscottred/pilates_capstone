const knex = require("knex")(require("../knexfile"));
const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403)
      req.username = user;
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
        const exerciseId = req.params.id;
        const allComments = await knex('comments').where({ exercise_id: exerciseId})
        if (allComments.length > 0) {
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

        const insertedComment = await knex('comments').insert({
            exercise_id,
            user_id,
            comment_text
        });
        
        if(insertedComment) {
            res.status(201).json({ message: "Comment posted successfully" });
        } else {
            res.status(404).json(`Exercise with id ${exercise_id} not found.`);
        }
    } catch (err) {
        res.status(500).send(`Error posting comment: ${err}`);
    }
});

router.put("/:id/comments", authenticateToken, async (req, res) => {
    try {

        const exercise_id = req.params.id

        const {
            comment_text,
            comment_id,
            user_id,
        } = req.body;

        const requiredProps = [
            "comment_text",
            "comment_id",
            "user_id",
        ];

        const missingProps = requiredProps.filter
        ((prop) => !req.body.hasOwnProperty(prop));
        if (missingProps.length > 0) {
            return res
                .status(400)
                .json({ error: `Missing properties: ${missingProps.join(", ")}` })
        }

        const updatedComment = await knex('comments')
        .where({
            comment_id: comment_id,
            user_id: user_id,
            exercise_id: exercise_id
        })
        .update({
            comment_text
        });

        if(updatedComment) {
            res.status(201).json({ message: "Comment updated successfully" });
        } else {
            res.status(404).json(`Comment with id ${comment_id} not found.`);
        }
    } catch (err) {
        res.status(500).send(`Error posting comment: ${err}`);
    }
});

router.delete("/:id/comments", authenticateToken, async (req, res) => {
    try {
        const exercise_id = req.params.id;

        const {
            comment_id,
            user_id,
        } = req.body;

        const requiredProps = [
            "comment_id",
            "user_id",
        ];

        const missingProps = requiredProps.filter
        ((prop) => !req.body.hasOwnProperty(prop));
        if (missingProps.length > 0) {
            return res
                .status(400)
                .json({ error: `Missing properties: ${missingProps.join(", ")}` })
        }

        const commentExists = await knex("comments")
            .where({
                comment_id: comment_id,
                user_id: user_id,
                exercise_id: exercise_id
            }).del();

        if (commentExists) {
            res.status(201).json({ message: `Comment with id ${comment_id} successfully deleted`});
        } else {
            res.status(404).json({ error: `Comment with id ${comment_id} could not be deleted because it does not exist.` });
        }
    } catch {
        res.status(500).json({ error: `Error deleting comment: ${comment_id}` });
    }
});



module.exports = router;