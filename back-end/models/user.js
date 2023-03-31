'use strict';

const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    Name: {
        type: String,
        required: true,
        unique: true,
        alias: "name",
    },
    FirstName: String,
    LastName: String,
    Age: Number,
    BirthDay: Date,
});

const user = mongoose.model('user', userSchema);

module.exports = {
    User: user,
};
