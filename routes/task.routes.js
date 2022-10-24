const express = require('express')
const router = express.Router()

const {
    renderTaskForm,
    createNewTask,
    showTasks,
    deleteTask,
    renderEditForm, 
    updateTask,
    changeTaskStatus
} = require('../controllers/task.controllers')

//new task
router.get('/tasks/add', renderTaskForm)
router.post('/tasks/add', createNewTask)

//Show task
router.get('/', showTasks)

//Delete Task
router.post('/tasks/remove/:id', deleteTask)

//Edit Task
router.get('/tasks/edit/:id', renderEditForm)
router.post('/tasks/edit', updateTask)

// Change Task
router.post('/tasks/changestatus', changeTaskStatus)

module.exports = router