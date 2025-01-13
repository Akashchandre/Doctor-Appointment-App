const express = require("express");
const Profile = require("../models/Profile");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

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
