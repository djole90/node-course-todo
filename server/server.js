const express = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/todo')
const {User} = require('./models/user')

const {ObjectID} = require('mongodb')

const app = express()

const port = !process.env.PORT ? 3000 : process.env.PORT

app.use(bodyParser.json())

app.post('/todos', (req, res, next) => {
    console.log(req.body)
    const todo = new Todo({
        text: req.body.text
    })
    todo.save().then(data => {
        res.send(data)
    })
    .catch(e => res.status(400).send(e))
})

app.get('/todos', (req, res, next) => {
    Todo
    .find()
    .then(data => {
        res.send(data)
    })
    .catch(e => res.status(400).send(e))
})

app.get('/todos/:todoId', (req, res, next) => {
    const id = req.params.todoId

    if (!ObjectID.isValid(id)) {
        return res.status(404).send()
    }

   Todo.findById(id).then(todo => {
       if (!todo) {
        res.status(404).send()
       }

       res.send({todo, kurac:'SIsa'})

   }).catch(e => {
       res.status(400).send()
   }) 
})

app.listen(port, () => {
    console.log(`App started on port ${port}`)
})


module.exports = {
    app
}