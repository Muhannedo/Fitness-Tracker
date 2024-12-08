const express = require("express");
const verifyToken = require("../middleware/verify-token");
const Exercise = require("../models/exercise");
const router = express.Router();

// Public Routes

// Protected Routes
router.use(verifyToken);

// CREATE EXERCISE
router.post("/", async (req, res) => {
  try {
    const exercise = new Exercise(req.body);
    await exercise.save();
    res.status(201).send(exercise);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
