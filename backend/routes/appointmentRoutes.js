const express = require("express");
const {
  createAppointment,
  getAppointments,
} = require("../controllers/appointmentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
/**
 * @swagger
 * /appointments:
 *   post:
 *     summary: Create a new appointment
 *     tags: [Appointments]
 *     security:
 *       - bearerAuth: []   # Ensures authentication via JWT token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               doctorType:
 *                 type: string
 *                 description: Type of the doctor (e.g., General Physician, Dentist)
 *               date:
 *                 type: string
 *                 format: date-time
 *                 description: The date and time of the appointment (in ISO 8601 format)
 *               comments:
 *                 type: string
 *                 description: Any additional comments or requests for the appointment
 *               reports:
 *                 type: string
 *                 description: The reports, if any, that need to be uploaded with the appointment
 *     responses:
 *       201:
 *         description: Appointment created successfully
 *       500:
 *         description: Server error
 */

// POST /api/appointments - Create a new appointment
router.post("/", authMiddleware, createAppointment);

/**
 * @swagger
 * /appointments:
 *   get:
 *     summary: Get all appointments for the logged-in user
 *     tags: [Appointments]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of appointments
 *       500:
 *         description: Server error
 */
// GET /api/appointments - Get all appointments 
router.get("/", authMiddleware, getAppointments);

module.exports = router;
