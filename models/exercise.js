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
  workout: { type: mongoose.Schema.Types.ObjectId, ref: "Workout" },
});
const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
