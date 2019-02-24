const {MongoClient, ObjectID} = require('mongodb')



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
if (err) {
   return console.log('Unable to connect to MongoDB Server')
}

console.log('Connected to MongoDB Server')

const db = client.db('TodoApp')

// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5c72822cf029e13fd18d4e63')
// }, {
//    $set: {
//        completed: true
//    } 
// },{
//     returnOriginal:false
// }).then(res =>console.log(res))


db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c728727f029e13fd18d4fa4')
}, {
    $set: {
        name: 'Djokica'
    },
    $min: {
        age:22
    }
}, {returnOriginal:false}).then(r => console.log(r))



// client.close()
})