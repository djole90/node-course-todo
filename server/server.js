const express = require('express')
const bodyParser = require('body-parser')


const {Todo} = require('./models/todo')
const {User} = require('./models/user')

const {ObjectID} = require('mongodb')

const app = express()


app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Jebi seee')
})

app.post('/todos', (req, res, next) => {
    console.log(req.body)
    const todo = new Todo({
        text: req.body.text
    })

    todo.save().then(data => {
        res.send(data)
    }).catch(e => res.status(400).send(e))
})

app.get('/todos', (req, res, next) => {
    Todo.find().then(data => {
        res.send({data})
    }).catch(e => res.status(400).send(e))
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

app.listen(process.env.PORT, () => {
    console.log(`App started on port`)
})


module.exports = {
    app
}