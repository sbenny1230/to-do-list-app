/**
 * 
 */


// Module dependencies
const express = require('express');

const router = express.Router(); // Express Router object
const taskController = require('../controllers/task.controller'); // Task controller


// Create a task
router.post('/', taskController.createTask);

// Update a task
router.put('/:id', taskController.updateTask);

// Delete a task
router.delete('/:id', taskController.updateTask);

// Get a task
router.get('/:id', taskController.getTask);

// Get all tasks
router.get('/', taskController.getAllTasks);

module.exports = router;
