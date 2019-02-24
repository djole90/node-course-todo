// const MongoClient = require('mongodb').MongoClient
// const obj = new ObjectID()
// console.log(obj)


const {MongoClient, ObjectID} = require('mongodb')



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
if (err) {
   return console.log('Unable to connect to MongoDB Server')
}

console.log('Connected to MongoDB Server')
const db = client.db('TodoApp')

db.collection('Todos').find().count().then(count => {
    console.log('TODOS')
    console.log(count)
}).catch(err => {
    console.log('Unable to fech todos', err)
})


// client.close()
})