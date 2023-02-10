const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide the name'],
        trim: true,
        maxlength: [20, 'max length must not be greater then 20']
    }, completed: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('Task', TaskSchema)