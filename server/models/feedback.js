const mongoose = require("mongoose");

// Qeustions
// 1. Do you use traya products regularly - yes, no, sometimes
// 2. Did you have any side affects - Yes no
// 3. How do you like the service from you Hair coach : bad, Fair, Good, excellent or a slider 1-10
// 4. Rate traya products : 1 - 10
// 5. Would you refer traya to any one ; yes .. no .. may be .. will wait for results.
// 6. coMMENT

const Schema = mongoose.Schema;

const feedback = new Schema({
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  usage: {
    type: String,
    enum: ["yes", "no", "sometimes"],
    default: "yes",
  },

  sideEffects: {
    type: String,
    enum: ["yes", "no"],
    default: "no",
  },

  service: {
    type: String,
    // enum: ["bad", "fair", "good", "excellent"],
    // default: "good",
  },

  rating: {
    type: String,
    default: "",
  },
  refer: {
    type: String,
    enum: ["yes", "no", "maybe", "result"],
    default: "yes",
  },

  comment: {
    type: String,
    lowercase: true,
    default: "",
  },
});

module.exports = mongoose.model("Feedback", feedback);
