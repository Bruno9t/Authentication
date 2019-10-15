const Project = require('../models/Project')

module.exports = {
    async show(req,res) {
       try{
           const projects = await Project.find().populate(['user','tasks'])

           return res.send({projects})

       }catch(err){
        return res.status(400).send({error:'_Error loading new project!'})
       }
    }
}