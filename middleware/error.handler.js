/**
 * 错误统一处理中间件
 */
const util = require('util')

module.exports = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    detail: util.format(err)
  })
}
