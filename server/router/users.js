const express = require('express')
const app = express()
const router = express.Router()
const jwt = require('jsonwebtoken')
const config = require('../config/')
const Users = require('../models/users.js')
app.set('secret', config.secret)

router.all('/', function (req, res) {
	res.send('Hello users!')
})

router.use((req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['x-access-token']
  if (token) {
    jwt.verify(token, app.get('secret'), (err, decoded) => {
      if (err) {
        let params = {
          code: 400,
          message: '令牌验证失败',
          data: ''
        }
        res.json(params)
      } else {
        req.decoded = decoded
        console.log(decoded)
        next()
      }
    })
  } else {
    let params = {
      code: 403,
      message: '无令牌信息',
      data: ''
    }
    res.json(params)
  }
})
router.all('/create', function (req, res) {
	var andyyou = new Users({
		name: 'andyyou',
		password: '12345678',
		admin: true
	})
	andyyou.save((err, doc) => {
		if (err) {
			let params = {
				code: 400,
				message: '保存失败',
				data: false
			}
			res.json(params)
		}
		let params = {
			code: 200,
			message: '保存成功',
			data: doc
		}
		res.json(params)
	})
})
router.all('/users', (req, res) => {
	Users.find({}, (err, doc) => {
		if (err) {
			let params = {
				code: 400,
				message: '获取失败',
				data: ''
			}
			res.json(params)
		} else {
			let params = {
				code: 200,
				message: '获取成功',
				data: {
					users: doc
				}
			}
			res.json(params)
		}
	})
})

module.exports = router