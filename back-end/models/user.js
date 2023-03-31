'use strict';

const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    FirstName: String,
    LastName: String,
    Age: Number,
    BirthDay: Date,
    Task: Schema.Types.ObjectId,
});

const user = mongoose.model('task', userSchema);

module.exports = {
    User: user,
};
