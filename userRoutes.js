const express = require("express");
const router = express.Router();
const { bookdata } = require("./model"); // Import the bookdata model correctly

// Define the route handler for fetching books for users
router.get("/books", async (req, res) => {
  try {
    const books = await bookdata.findAll();
    res.json(books);
  } catch (error) {
    console.error("Error fetching book data:", error);
    res.status(500).json({ error: "Failed to fetch book data" });
  }
});

module.exports = router;
