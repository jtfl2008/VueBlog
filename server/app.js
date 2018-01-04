const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const config = require('./config/index.js')
const port = config.port
const users = require('./router/users.js')
const Users = require('./models/users.js')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(logger('dev'))
// app.set('secret', config.secret)
// console.log(app.get('secret'))
app.all('/authenticate', (req, res) => {
  Users.findOne({
    name: req.body.name
  }, (err, doc) => {
    if (err) {
      let params = {
        code: 400,
        message: '请求错误',
        data: ''
      }
      res.json(params)
    } else {
      if (!doc) {
        let params = {
          code: 400,
          message: '用户不存在',
          data: ''
        }
        res.json(params)
      } else {
        if(doc.password !== req.body.password){
          let params = {
            code: 400,
            message: '密码错误',
            data: ''
          }
          res.json(params)
        } else {
          console.log(doc.name)
          let token = jwt.sign({ id: doc._id }, app.get('secret'), {
            expiresIn: 60*60*24
          })
          let params = {
            code: 200,
            message: '验证成功',
            data: token
          }
          res.json(params)
        }
        
      }
    }
  })
})
app.get('/', function (req, res) {
  res.send('Hello Home!');
})
app.use('/users', users)

app.listen(port, () => {
  console.log('app listening in ' + port)
})