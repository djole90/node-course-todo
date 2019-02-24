const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')
const id = '5c72b395b6de831d682baeeb'
const idUser = '5c72bb22f029e13fd18d5843'

if (!ObjectID.isValid(id)) {
    console.log('ID not valid')
}

Todo.find({
    _id: id
}).then(todos => {
    console.log('Todos', todos)
})

Todo.findOne({
    _id: id
}).then(todo => {
    console.log('Todo', todo)
})

Todo.findById(id).then(todo => {

    if (!todo) {
        return console.log('Id no found')
    }
    console.log('Todo by ID', todo)
}).catch(e => console.log(e))


User
.findById(idUser)
.then(user => {
    if (!user) {
        return console.log('User not found')
    }
    console.log('User:', user)
})
.catch(err => console.log('ERROR', err))


