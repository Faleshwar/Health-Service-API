const express = require("express");
const serviceRoutes = require("./routes/serviceRoute");
const app = express();

app.use(express.json());

app.use("/service", serviceRoutes);

module.exports = app;


