const userController = require('../controllers/userController')
const express = require("express");
const userRouter = express.Router()

userRouter.get('/list', userController.get_list)
module.exports = userRouter
