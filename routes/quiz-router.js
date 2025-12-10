const express = require('express')
const quizzes = require('../database/quizzes')
const quizRouter = express.Router()
const authVerify  = require('../middleware/authverify')
quizRouter.route("/")
    .get(authVerify, (req,res) => {
        res.json(quizzes)
    })
module.exports = quizRouter