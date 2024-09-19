const Service = require("../model/serviceModel");

const addService = async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const newService = new Service({ name, description, price });
        await newService.save();
        res.status(201).send(newService);

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const getServiceById = async (req, res) => {
    try {
        const s = await Service.findOne({ _id: req.query.id });
        if (!s) {
            res.status(404).json({ "error": "Service not found" });
        } else {
            res.send(s);
        }

    } catch (err) {
        res.status(400).json({ error: err.message })
    }

}

const getAllService = async (req, res) => {
    try {
        const services = await Service.find({});
        res.send(services)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }

}

const updateService = async (req, res) => {
    const { name, description, price } = req.body;
    try {
        await Service.findOneAndUpdate({ _id: req.query.id }, { name, description, price });
        const s = await Service.findOne({ _id: req.query.id });
        if (!s) {
            res.status(404).json({ "error": "Service not found" });
        } else {
            res.send(s);
        }

    } catch (err) {
        res.status(400).json({ error: err.message })
    }

}

const deleteService = async (req, res) => {

    try {
        const s = await Service.findOneAndDelete({ _id: req.query.id });
        if (!s) {
            res.status(404).json({ "error": "Service not found" });
        } else {
            res.send(s)
        }

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = {addService, getServiceById, getAllService, updateService, deleteService};