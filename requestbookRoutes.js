const express = require("express");
const router = express.Router();
const { Booking } = require("./model"); // Import the Booking model correctly

// Define the route handler for submitting booking requests
router.post("/submit", async (req, res) => {
  try {
    // Extract data from request body
    const { Name, libraryid, from_date, to_date, Email, contactNumber, title } =
      req.body;

    // Create a new booking record
    const newBooking = await Booking.create({
      Name,
      libraryid,
      from_date,
      to_date,
      Email,
      contactNumber,
      title,
    });

    // Respond with success message
    res.status(201).json({ message: "Booking request submitted successfully" });
  } catch (error) {
    console.error("Error submitting booking request:", error);
    res.status(500).json({ error: "Failed to submit booking request" });
  }
});

module.exports = router;
