const Project  = require('../models/Project')

module.exports = {
    async del(req,res){
        try {
            await Project.findByIdAndRemove(req.params.projectId)

            return res.send({message: 'Delete'})
        } catch (error) {
            return res.status(400).send({error:'Error deleting project!'})
        }
    }
}