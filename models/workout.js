const mongoose = require("mongoose");

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
  exercise: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "exercise",
    },
  ],
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
