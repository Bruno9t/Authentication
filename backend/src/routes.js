const express = require('express')
const UserController = require('./controllers/UserController')
const UserControlerAuth = require('./controllers/UserControllerAuth')
const ProjectController = require('./controllers/ProjectController')
const ProjectIdConstroller = require('./controllers/ProjectIdController')
const CreateProjectController = require('./controllers/CreateProjectController')
const UpdateProjectController = require('./controllers/UpdateProjectController')
const DeleteProjectController = require('./controllers/DeleteProjectController')

const routes = express.Router()

routes.get('/projects',ProjectController.show)
routes.get('/projects/:projectId',ProjectIdConstroller.show)

routes.post('/projects',CreateProjectController.store)
routes.post('/register',UserController.store)
routes.post('/login',UserControlerAuth.store)

routes.put('/projects/:projectId',UpdateProjectController.restore)

routes.delete('/projects/:projectId',DeleteProjectController.del)
module.exports = routes;