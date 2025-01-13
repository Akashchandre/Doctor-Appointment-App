const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  profilePicture: { type: String }, // Base64 string or image URL
});

module.exports = mongoose.model("Profile", profileSchema);
