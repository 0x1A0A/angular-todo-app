'use strict';

const mongoose = require("mongoose");
const {Schema} = mongoose;

const todoSchema = new Schema({
    Note: String,
    Done: Boolean,
});

const todo = mongoose.model('task', todoSchema);

module.exports = {
    Todo: todo,
};
