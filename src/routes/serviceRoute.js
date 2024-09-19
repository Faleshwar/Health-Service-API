const express = require("express");
const {query} = require("express-validator");

const {addService, getServiceById, getAllService, updateService, deleteService} = require("../controllers/serviceController");

const router = express.Router();

router.post("/add", addService);

router.get("/", query("id").escape().notEmpty(), getServiceById);

router.get("/all", getAllService);

router.put("/update", query("id").escape().notEmpty(), updateService);

router.delete("/delete", query("id").escape().notEmpty(), deleteService);


module.exports = router;