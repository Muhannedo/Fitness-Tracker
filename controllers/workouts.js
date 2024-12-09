const express = require("express");
const verifyToken = require("../middleware/verify-token");
const Workout = require("../models/workout");
const router = express.Router();

// Public Routes

// Protected Routes
router.use(verifyToken);

//--------Workout managment----------------

// CREATE WORKOUT
router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user._id });
    res.send(workouts);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET WORKOUT BY ID
router.get("/:id", async (req, res) => {
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

// UPDATE WORKOUT
router.put("/:id", async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!workout) {
      return res.status(404).send({ message: "Workout not found" });
    }
    Object.keys(req.body).forEach((key) => {
      workout[key] = req.body[key];
    });
    await workout.save();
    res.send(workout);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE WORKOUT
router.delete("/:id", async (req, res) => {
  try {
    const workout = await Workout.findOneAndDelete({
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

//--------Exercise managment----------------

// CREATE EXERCISE
router.post("/:workoutId/exercises", async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.workoutId);
    workout.exercise.push(req.body);
    await workout.save();

    const newExercise = workout.exercise[workout.exercise.length - 1];
    // await newExercise.populate("exercise").execPopulate();
    res.status(201).send(newExercise);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// update exercise
router.put("/:workoutId/exercises/:exerciseId", async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.workoutId);
    const exercise = workout.exercise.id(req.params.exerciseId);
    Object.keys(req.body).forEach((key) => {
      exercise[key] = req.body[key];
    });
    await workout.save();
    res.send(exercise);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// get all exercises
router.get("/:workoutId/exercises", async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.workoutId);
    res.send(workout.exercise);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete exercise
router.delete("/:workoutId/exercises/:exerciseId", async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.workoutId);
    workout.exercise.remove({ _id: req.params.exerciseId });
    await workout.save();
    res.status(200).json({ message: "Exercise deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
