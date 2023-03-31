'use strict';

const mongoose = require("mongoose");
const {Schema} = mongoose;

const listSchema = new Schema({
    Note: String,
    Done: Boolean,
    TaskId: Schema.Types.ObjectId,
});

const list = mongoose.model('list', listSchema);

module.exports = {
    List: list,
};
