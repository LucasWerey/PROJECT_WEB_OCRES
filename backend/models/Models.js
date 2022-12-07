const mongoose = require("mongoose");

// Creation d'un schema
const testTemplate = new mongoose.Schema({
  duree: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("mytable", testTemplate);
