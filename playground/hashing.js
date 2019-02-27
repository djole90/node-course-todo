const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')

let data = {
    id: 10
}

const token = jwt.sign(data, '123abc')


const decoded = jwt.verify(token, '123abc')


console.log(token)
console.log('Decoded', decoded)

// const message = 'I ma user number 234'

// const hash = SHA256(message).toString()
// console.log(hash)
// const data = {
//     id: 4
// }

// const token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }


// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()

// if (resultHash === token.hash) {
//     console.log('Data was not changed')
// } else {
//     console.log('Data was changed. Dont Trust!!!')
// }


