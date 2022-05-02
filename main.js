const express = require('express')
const app = express()
const morgan = require('morgan')

const PORT = process.env.SERVICE_PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'))

// 根路由
app.use('/api', require('./app.controller'))

app.listen(PORT, function () {
  console.log(`listen to http://localhost:${PORT}`)
})
