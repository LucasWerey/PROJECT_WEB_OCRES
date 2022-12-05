const mongoose = require("mongoose");

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
