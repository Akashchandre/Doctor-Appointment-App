const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const profileRoutes = require("./routes/profileRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Doctor Appointment App API",
      version: "1.0.0",
      description: "API documentation for the Doctor Appointment Booking system",
    },
    servers: [
      {
        url: "https://doctor-appointment-app-sz3z.onrender.com/api",
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",            // Use HTTP authentication
          scheme: "bearer",        // Specify Bearer token
          bearerFormat: "JWT",     // Optional, to indicate the token format
        },
      },
    },
    security: [
      {
        bearerAuth: [],            // Apply bearerAuth globally to all endpoints
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/profile", profileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
