require("dotenv").config();

const express = require("express");
const app = express();
const authRoutes = require('./routes/auth.js');
const exercises = require("./routes/exercises.js");
const cors = require("cors");
const { CORS_ORIGIN } = process.env;

app.use(express.json());
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.static("public"));

app.use("/auth", authRoutes);
app.use("/exercises", exercises);

app.listen(8080, () => {
  console.log("Server is working on http://localhost:8080");
});
