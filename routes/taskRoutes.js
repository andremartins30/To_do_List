const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')
const Task = require('../model/Task')

router.get('/add', TaskController.createTask)
router.get('/', TaskController.showTasks)
router.post('/add', TaskController.createTaskSave)
router.post('/remove/:id', TaskController.removeTask)
router.get('/edit/:id', TaskController.editTask)
router.post('/edit', TaskController.editTaskPost)
router.post('/changestatus', TaskController.changeTaskStatus)

module.exports = router