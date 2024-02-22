const express = require("express");
const router = express.Router();
const { bookdata } = require("./model");

router.post("/submit", async (req, res) => {
  try {
    const { title, author, subject, publish_date, num_available } = req.body;

    const newCenter = await bookdata.create({
      title,
      author,
      subject,
      publish_date,
      num_available,
    });

    res.status(201).json({ success: true, data: newCenter });
  } catch (error) {
    console.error("Error submitting book data:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit center data. Please try again later.",
    });
  }
});

router.get("/centers", async (req, res) => {
  try {
    const centers = await bookdata.findAll();
    res.json(centers);
  } catch (error) {
    console.error("Error fetching center data:", error);
    res.status(500).json({ error: "Failed to fetch center data" });
  }
});

router.delete("/centers/:id", async (req, res) => {
  try {
    const centerId = req.params.id;
    const centerToDelete = await bookdata.findByPk(centerId);
    if (!centerToDelete) {
      return res
        .status(404)
        .json({ success: false, message: "Center not found" });
    }

    await centerToDelete.destroy();

    res
      .status(200)
      .json({ success: true, message: "Center deleted successfully" });
  } catch (error) {
    console.error("Error deleting center:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete center" });
  }
});

module.exports = router;
