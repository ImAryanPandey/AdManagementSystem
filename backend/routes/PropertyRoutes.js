const express = require("express");
const multer = require("multer");
const Property = require("../models/Property");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Create a new property
router.post("/", protect, upload.array("photos", 3), async (req, res) => {
  try {
    const { name, location, nearMarket, city, pinCode, height, width } = req.body;

    const photos = req.files.map((file) => file.path);

    const property = new Property({
      user: req.user._id, // req.user is set by protect middleware
      name,
      location,
      nearMarket,
      city,
      pinCode,
      height,
      width,
      photos,
    });

    const savedProperty = await property.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch properties for the logged-in user (history)
router.get("/history", protect, async (req, res) => {
  try {
    const properties = await Property.find({ user: req.user._id });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch all properties (for search page)
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
