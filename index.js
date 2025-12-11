if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require('express');
const quizzes = require('./database/quizzes')
const cors = require('cors')
const quizRouter = require("./routes/quiz-router")
const { loginRouter,signupRouter,authVerify } = require('./routes/auth-router')
// const userdata = require("./database/users")
const routeNotFound = require('./middleware/routeNotFound')
const categoriesRouter = require('./routes/categories-routes')
const jwt = require("jsonwebtoken")
const crypto = require('crypto');
const app = express()
const PORT = process.env.PORT || 4000;


const secretkey = process.env.SECRET_KEY 
console.log('Secret Key loaded:', secretkey)
// console.log(secretkey)

app.use(cors())
app.use(express.json())
app.get("/",(req, res) => {
    res.json(quizzes)
    // console.log("hii")
})
app.use("/categories",categoriesRouter)
app.use("/quiz",quizRouter)
app.use("/auth/login",loginRouter)
app.use("/auth/signup",signupRouter)
// app.get("/quiz",(req,res) => {
//     res.send(quizzes.data)
// })
app.use(routeNotFound)
app.listen(PORT,()=> {
    console.log("server started at 4000 port") 
})