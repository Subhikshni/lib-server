const express = require("express");
const router = express.Router();
const bookdata = require("./model").bookdata;

router.get("/centers", async (req, res) => {
  try {
    const centers = await bookdata.find();
    res.json(centers);
  } catch (error) {
    console.error("Error fetching center data:", error);
    res.status(500).json({ error: "Failed to fetch center data" });
  }
});

module.exports = router;
