const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  reps: {
    type: String,
    required: true,
  },
  sets: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const workoutSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: false,
  },
  workoutType: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  exercise: [exerciseSchema],
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
