const express = require("express");
const Profile = require("../models/Profile");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * /profile:
 *   post:
 *     summary: Create or update a user profile
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               zipcode:
 *                 type: string
 *               profilePicture:
 *                 type: string
 *     responses:
 *       200:
 *         description: Profile saved successfully
 *       500:
 *         description: Server error
 */

// Create or update profile
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { email, firstName, lastName, phone, address, city, state, zipcode, profilePicture } = req.body;

    // Check if the profile already exists
    let profile = await Profile.findOne({ email });

    if (profile) {
      // Update existing profile
      profile = await Profile.findOneAndUpdate(
        { email },
        { firstName, lastName, phone, address, city, state, zipcode, profilePicture },
        { new: true }
      );
    } else {
      // Create a new profile
      profile = new Profile({
        email,
        firstName,
        lastName,
        phone,
        address,
        city,
        state,
        zipcode,
        profilePicture,
      });
      await profile.save();
    }

    res.status(200).json({ message: "Profile saved successfully", profile });
  } catch (error) {
    console.error("Error saving profile:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Get the user profile
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile fetched successfully
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */

// Get profile for the logged-in user
router.get("/", authMiddleware, async (req, res) => {
    try {
      const profile = await Profile.findOne({ email: req.user.email });
  
      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }
  
      res.status(200).json(profile);
    } catch (error) {
      console.error("Error fetching profile:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
  
module.exports = router;
