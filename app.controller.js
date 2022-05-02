const express = require('express')
const rootController = express.Router()

// 路由统一处理
rootController.use('/users', require('./modules/users/users.controller'))

module.exports = rootController
  // 404中间件处理
  .use(require('./middleware/not.fount'))
  // 统一错误处理中间件
  .use(require('./middleware/error.handler'))
