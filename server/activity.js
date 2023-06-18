const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  activity: String,
  type: String,
  participants: Number,
  price: Number,
  link: String,
  key: String,
  accessibility: Number,
  timeAdded: String,
});

module.exports = mongoose.model("Activity", activitySchema);
