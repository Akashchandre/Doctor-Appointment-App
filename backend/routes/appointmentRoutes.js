const express = require("express");
const {
  createAppointment,
  getAppointments,
} = require("../controllers/appointmentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// POST /api/appointments - Create a new appointment
router.post("/", authMiddleware, createAppointment);

// GET /api/appointments - Get all appointments 
router.get("/", authMiddleware, getAppointments);

module.exports = router;
