require("dotenv").config();
const express = require("express");
const app = express();


app.get("/api/ip", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  res.json({ ip });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on ",process.env.PORT);
});
