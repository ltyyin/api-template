const usersController = require('express').Router()
const usersService = require('./users.service')

module.exports = usersController
  .get('/', usersService.getUser)

  .post('/', usersService.postUser)
