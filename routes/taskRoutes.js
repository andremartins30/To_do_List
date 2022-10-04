const express = require('express')
const router = express.Router()
const Task = require('../model/Task')

router.get('/add', (req, res) => {
    res.render('tasks/create')
})

router.get('/', async (req, res) =>{

    const tasks = await Task.find().lean()

    res.render('tasks/all', { tasks })
})

router.post('/add', async(req, res) => {
    const title = req.body.title
    const description = req.body.description
    
    const task = new Task({
     title:title,
     description: description,
     done: false,})

    await task.save()
     res.redirect('/tasks')
    
 })

router.post('/remove/:id', async (req, res) => {

    const id = req.params.id

    await Task.deleteOne({_id : id})

    res.redirect('/tasks')
})


router.get('/edit/:id', async (req, res) => {
    const id = req.params.id

    const task =  await Task.findById(id).lean()

    res.render('tasks/edit', { task })
})


router.post('/edit', async(req, res) => {
    const id = req.body.id
    const title = req.body.title
    const description = req.body.description

    const task = {title, description}

    await Task.updateOne({ _id :id }, task)

    res.redirect('/tasks')
})


router.post('/changestatus', async(req, res) => {
    const id = req.body.id

    const task = {
        done: req.body.done === "false" ? true : false,
    }

    await Task.updateOne({_id:id}, task)

    res.redirect('/tasks')
})

module.exports = router