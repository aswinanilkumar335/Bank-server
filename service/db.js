// server - database integration
// import mongoose
const mongoose = require('mongoose')

// connect server with mongodb via mongoose
mongoose.connect('mongodb://localhost:27017/bank', {
    useNewUrlParser: true          //to don't show the warning
})

// create model for bank
const User = mongoose.model('User',{
    acno: Number,
    username: String,
    password: String,
    balance: Number,
    transaction: []
})

module.exports = {
    User
}