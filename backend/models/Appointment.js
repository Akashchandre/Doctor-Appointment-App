const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  doctorType: { type: String, required: true },
  date: { type: Date, required: true },
  comments: { type: String },
  reports: { type: String },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
