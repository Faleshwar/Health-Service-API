const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Service name is required"] },
    description: { type: String },
    price: { type: Number, required: [true, "Service price is required"] }
});

const Service = mongoose.model("service", serviceSchema);

module.exports = Service;