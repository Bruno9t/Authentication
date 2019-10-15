const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProjectSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    tasks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Task',

    }],
    createdAt:{
        type:Date,
        default:Date.now
    }


})

module.exports = mongoose.model('Project',ProjectSchema)