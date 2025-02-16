const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, // Link the property to the user who posted it
  },
  name: { type: String, required: true },
  location: { type: String, required: true },
  nearMarket: { type: String, required: true },
  city: { type: String, required: true },
  pinCode: { type: String, required: true },
  height: { type: Number, required: true },
  width: { type: Number, required: true },
  photos: [{ type: String, required: true }], // Array of image URLs
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Property", propertySchema);
