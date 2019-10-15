const Project = require('../models/Project')

module.exports = {
    async show(req,res){
        try{
        const project = await Project.findById(req.params.projectId).populate(['user','tasks'])

        return res.send({project})
        }catch(err){
            return res.status(400).send({error:'Error loading project.'})
        }
    }
}