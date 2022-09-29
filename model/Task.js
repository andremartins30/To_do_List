const mongoose = require('../db/conn')
const {Schema} = mongoose

const Task = mongoose.model(
    'Task',
    new Schema({
        title: {type: String, required: true},
        description: {type: String, required: true},
    },
    {timestamps: true},),
)
module.exports = Task