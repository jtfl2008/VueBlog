const mongoose = require('mongoose')
const config = require('../config/index.js')
mongoose.Promise = global.Promise
const DB_URL = config.DB_URL

mongoose.connect(DB_URL, { useMongoClient: true })

mongoose.connection.on('connect', function () {
  console.log('Mongoose connection open to ' + DB_URL)
})

mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err)
})

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected')
})

module.exports = mongoose
