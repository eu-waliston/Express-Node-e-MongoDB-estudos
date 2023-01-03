const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name: {Type: String, required: true},
    done: {Type: Boolean, default: false},
    checklist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Checklist',
        required: true
    }
})

module.exports = mongoose.model('Task', taskSchema)