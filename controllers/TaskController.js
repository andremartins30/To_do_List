const Task = require('../model/Task')

module.exports = class TaskController{

    static createTask(req, res){
        res.render('tasks/create')
    }

    static async showTasks(req, res){

        const tasks = await Task.find().lean()
        
        res.render('tasks/all', { tasks })
    }
}