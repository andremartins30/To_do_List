const taskCtrl = {}

const Task = require('../models/Task')

taskCtrl.renderTaskForm = (req, res) => {
    res.render('tasks/create-tasks')
}

taskCtrl.createNewTask = async (req, res) => {
    const {title, description} = req.body
    const newTask = new Task({title, description})
    await newTask.save()

    res.redirect('/')
}

taskCtrl.showTasks = async (req, res) => {
    const tasks = await Task.find().lean()
    res.render('tasks/all-tasks', {tasks})
}

taskCtrl.renderEditForm = async (req, res) => {
    const id = req.params.id
    const task = await Task.findById(id).lean()
    res.render('tasks/edit-tasks', {task})
}

taskCtrl.updateTask = async (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const description = req.body.description
    const task = {title, description}

    await Task.updateOne({_id:id}, task)
    
    console.log(task)
    res.redirect('/')
}

taskCtrl.deleteTask = async (req, res) => {
    const id = req.params.id

    await Task.findByIdAndDelete(id)

    res.redirect('/')
}

taskCtrl.changeTaskStatus = async (req, res) => {
    const id = req.body.id

    const task = {
        done: req.body.done === "false" ? true : false,
    }

    await Task.updateOne({_id:id}, task)

    console.log(task)

    res.redirect('/')
}

module.exports = taskCtrl