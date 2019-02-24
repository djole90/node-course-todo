const {MongoClient, ObjectID} = require('mongodb')



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
if (err) {
   return console.log('Unable to connect to MongoDB Server')
}

console.log('Connected to MongoDB Server')
const db = client.db('TodoApp')

// deleteMany
// db.collection('Todos').deleteMany({text: 'Something to do'})
// .then(result => {
    // console.log(result)
// })
// deleteOne

// db.collection('Users').deleteOne({name: 'Djole'}).then(res => console.log(res))

// findoneanddelete

db.collection('Todos').findOneAndDelete({completed: true}).then(r => console.log(r))

db.collection('Users').findOneAndDelete({_id: new ObjectID('5c7278fa5929a30d90365a18')}).then(r => console.log(r))
db.collection('Users').deleteMany({name: 'Djole'}).then(r => console.log(r))
// client.close()
})