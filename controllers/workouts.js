const express = require("express");
const verifyToken = require("../middleware/verify-token");
const Workout = require("../models/workout");
const router = express.Router();

// Public Routes

// Protected Routes
router.use(verifyToken);
// CREATE WORKOUT
router.post("/", verifyToken, async (req, res) => {
  try {
    const workout = new Workout(req.body);
    workout.user = req.user._id;
    await workout.save();
    res.status(201).send(workout);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET ALL WORKOUTS
router.get("/", verifyToken, async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user._id });
    res.send(workouts);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET WORKOUT BY ID
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!workout) {
      return res.status(404).send({ message: "Workout not found" });
    }
    res.send(workout);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
