const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TaskSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Project',
        require:true,
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    completed:{
        type:Boolean,
        require:true,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('Task',TaskSchema)