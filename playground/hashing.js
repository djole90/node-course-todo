const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs')

let password = '123avdddddddddddddsassssssssssssssssaaaab'

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash)
//     })
// })

var hashedPassword = '$2a$10$G2tjn.j28.XpZVt.zr4Dhe9JW6siQKH3XcQw7LC7eyXtjexM3/Kq2'

bcrypt.compare(password, hashedPassword, (err, result) => {
    console.log(result)
})
// let data = {
//     id: 10
// }

// const token = jwt.sign(data, '123abc')


// const decoded = jwt.verify(token, '123abc')


// console.log(token)
// console.log('Decoded', decoded)

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


