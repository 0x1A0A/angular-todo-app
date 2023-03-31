'use strict';

const mongoose = require("mongoose");
const {Schema} = mongoose;

const listSchema = new Schema({
    message: {
        type: String,
    },
    done: {
        type: Boolean,
        default: false,
    }
});

const taskSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    firstName: String,
    lastName: String,
    age: Number,
    birthDay: Date,
    lists: [listSchema]
});

module.exports = {
    Task: mongoose.model('task', taskSchema),
    List: mongoose.model('list', listSchema),
};
