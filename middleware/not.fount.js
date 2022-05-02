/**
 * 404 处理中间件
 */
module.exports = (req, res, next) => {
  res.status(404).json({
    message: '404 Not Fount.'
  })
}
