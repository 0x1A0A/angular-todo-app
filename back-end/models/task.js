'use strict';

const mongoose = require("mongoose");
const {Schema} = mongoose;

const taskSchema = new Schema({
    Name: String,
    todo: Schema.Types.ObjectId,
});

const task = mongoose.model('task', taskSchema);

module.exports = {
    Task: task,
};
