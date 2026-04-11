const Task = require("../models/Task");

// Create Task (Assign Homework)
exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate("student");
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Task Status
exports.updateTask = async (req, res) => {
    try {
        const updated = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};