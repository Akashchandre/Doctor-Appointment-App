const Appointment = require("../models/Appointment");

// Create a new appointment
const createAppointment = async (req, res) => {
  const { doctorType, date, comments, reports } = req.body;
  try {
    const appointment = await Appointment.create({
      userId: req.user.id,
      doctorType,
      date,
      comments,
      reports,
    });

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all appointments 
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.user.id });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createAppointment, getAppointments };
