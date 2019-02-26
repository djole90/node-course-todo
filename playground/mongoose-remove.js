const {ObjectID} = require('mongodb')
const {mongoose} = require('../server/db/mongoose')
const {Todo} = require('../server/models/todo')
const {User} = require('../server/models/user')
const id = '5c72b395b6de831d682baeeb'
const idUser = '5c72bb22f029e13fd18d5843'


// we get object returned
Todo.findOneAndRemove({
    text: 'Jebo ga opet ovo sranje 123456'
}).then(res => console.log(' FIND ONE AND REMOVE', res))
Todo.findByIdAndRemove('5c72b395b6de831d682baeeb').then(res => console.log('FIND BY ID AND REMOVE',res))

