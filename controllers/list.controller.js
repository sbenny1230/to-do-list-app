/**
 * CRUD functions for lists
 */

const baseController = require('./base.controller');
const listModel = require('../models/list.model');


// Create and save a list
exports.createList = baseController.create(listModel);

// Update a list
exports.updateList = baseController.update(listModel);

// Delete a list
exports.deleteList = baseController.delete(listModel);