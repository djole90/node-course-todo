const mongoose = require('mongoose')
const port = 'mongodb://localhost:27017/TodoApp'
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)



module.exports = {
    mongoose,
}