const mongoose = require('./DB.js')
const Schema = mongoose.Schema
const usersSchema = new Schema({
  name: String,
  password: String,
  admin: Boolean
})

module.exports = mongoose.model('users', usersSchema)