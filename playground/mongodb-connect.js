// const MongoClient = require('mongodb').MongoClient
// const obj = new ObjectID()
// console.log(obj)


const {MongoClient, ObjectID} = require('mongodb')



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
if (err) {
   return console.log('Unable to connect to MongoDB Server')
}

console.log('Connected to MongoDB Server')

// const db = client.db('TodoApp')

// db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false,
//     snow: 'Abc'
// }, (err, result) => {
//     if (err) {
//         return console.log('Unable to insert Todo', err)
//      }

//      console.log(result.ops[0]._id.getTimestamp())
//      console.log(JSON.stringify(result.ops, undefined, 2))
// })

// db.collection('Users').insertOne({
//     name: 'Djole',
//     age: 28,
//     location: 'Belgrade'
// }, (err, result) => {
//     if (err) {
//         return console.log('Unable to insert User', err)
//     }

//     console.log(JSON.stringify(result.ops, undefined, 2))
// })

client.close()
})