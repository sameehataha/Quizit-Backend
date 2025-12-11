if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require('express');
const jwt = require("jsonwebtoken")
const userdata = require("../database/users.js")
const crypto = require('crypto');
const loginRouter = express.Router()
const signupRouter = express.Router()
const {loginHandler,signupHandler} =  require('../controllers/authControllers.js')
const secretkey = process.env.SECRET_KEY 
loginRouter.route("/")
    .post(loginHandler)
signupRouter.route("/")
    .post(signupHandler)
module.exports = { signupRouter, loginRouter }