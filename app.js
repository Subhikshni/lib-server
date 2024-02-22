const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./db");
const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes"); // Import userRoutes

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes); // Mount userRoutes under /api/user

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((err) => {
    console.error("Unable to sync database:", err);
  });
