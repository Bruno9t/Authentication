const Task = require('../models/Task')
const Project = require('../models/Project')
module.exports = {
    //o userId vem do token de autenticacao
    async store(req,res){
        const {title,description,tasks} = req.body
        try{
            const project = await Project.create({title,description, user:req.userId})

            await Promise.all(tasks.map(async task => {
                const projectTask = new Task({...task,project:project._id})

                await projectTask.save()
                project.tasks.push(projectTask)
            }))

            await project.save()
        

            return res.send({project})
        }catch(err){
            //console.log(err) para ver o erro complato no console
            return res.status(400).send({error:'_Error creating new project!'})
        }
    }
}