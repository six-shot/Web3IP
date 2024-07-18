require("dotenv").config();
var cron = require("node-cron");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

cron.schedule("*/5 * * * *", () => {
  console.log("See you next 5 minutes");
});

app.set("trust proxy", true);

app.get("/api/ip", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  res.json({ ip });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on ", process.env.PORT);
});
