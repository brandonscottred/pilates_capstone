require("dotenv").config();

const knex = require("knex")(require("../knexfile"));
const express = require("express");
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { ACCESS_TOKEN_SECRET, JWT_EXPIRY } = process.env

// Login
router.post("/login", async (req, res) => {

    const { username, password} = req.body

    if (!username || !password) {
        return res.status(400).json({
            message: 'Username and Password are required',
        });
    }

    try {
        const user = await knex('users').where({ username }).first();
        if (!user) {
            return res.status(401).json({ message: 'User not found' })
        }

        const validPassword = await bcrypt.compare( password, user.password )
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ username: user.username }, ACCESS_TOKEN_SECRET, { expiresIn: JWT_EXPIRY });

        return res.status(201).json({
            success: true,
            message: 'User Logged In',
            username: user.username,
            user_id: user.user_id,
            token,
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
          message: 'Server-side Error',
        });
    }
});

// Register
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            message: 'Please ensure all fields are entered in request body'
        })
    }

    try {
        const userExists = await knex('users').where({ email }).first();

        if (userExists) {
            return res.status(409).json({
                message: `User with email ${email} already exists`
            })
        }

        const hashPassword = await bcrypt.hash(password, 10)
        await knex('users').insert({
            username,
            email,
            password: hashPassword,
        })

        const newUser = await knex('users').where({ email }).first();

        const token = jwt.sign({ username: newUser.username }, ACCESS_TOKEN_SECRET, { expiresIn: JWT_EXPIRY });

        return res.status(201).json({
            success: true,
            message: 'Registered New User',
            token,
            username: newUser.username,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
          message: 'Server-side Error',
        });
    }
})


module.exports = router;