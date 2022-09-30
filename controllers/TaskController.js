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
        description: description,
        done: false,})

       await task.save()
        res.redirect('/tasks')
       
    }

    static async showTasks(req, res){

        const tasks = await Task.find().lean()

        res.render('tasks/all', { tasks })
    }

    static async removeTask(req, res){

        const id = req.params.id

        await Task.deleteOne({_id : id})

        res.redirect('/tasks')
    }

    static async editTask(req, res){
        const id = req.params.id

        const task =  await Task.findById(id).lean()

        res.render('tasks/edit', { task })
    }

    static async editTaskPost(req, res){
        const id = req.body.id
        const title = req.body.title
        const description = req.body.description

        const task = {title, description}

        await Task.updateOne({ _id :id }, task)

        res.redirect('/tasks')
    }

    static async changeTaskStatus(req, res){
        const id = req.body.id

        const task = {
            done: req.body.done === "false" ? true : false,
        }

        await Task.updateOne({_id:id}, task)

        res.redirect('/tasks')
    }

}