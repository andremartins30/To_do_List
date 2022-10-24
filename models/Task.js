const {Schema, model} = require('mongoose')

const TaskSchema  = new Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        done: {
            type: Boolean, 
            
        },
},{timestamps: true,
    
});
module.exports = model('Task', TaskSchema)