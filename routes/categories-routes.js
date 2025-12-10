const express = require('express')
const categoriesRouter = express.Router()
const quizzes = require("../database/quizzes")
categoriesRouter.route("/")
   .get((req,res) => {
        res.json(quizzes)
   })
module.exports = categoriesRouter