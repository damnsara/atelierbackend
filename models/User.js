const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: String,
    password: String,
    admin: Boolean,
    mail: String
})



module.exports = User