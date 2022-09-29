const Task = require('../model/Task')

module.exports = class TaskController{

    static createTask(req, res){
        res.render('tasks/create')
    }

    static async createTaskSave(req, res){
       const title = req.body.title
       const description = req.body.description
       
       const task = new Task({
        title:title,
        description: description,})

       await task.save()
            console.log('Task Criada!')
        res.redirect('/tasks')
       
    }

    static async showTasks(req, res){

        const tasks = await Task.find().lean()

        res.render('tasks/all', { tasks })
    }

    
}