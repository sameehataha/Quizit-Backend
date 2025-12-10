require('dotenv').config();
const express = require('express');
const jwt = require("jsonwebtoken")
const userdata = require("../database/users.js")
const crypto = require('crypto');
const { v4: uuid} = require("uuid")
const secretkey = process.env.SECRET_KEY || crypto.randomBytes(32).toString('hex');

const signupHandler = (req,res) => {
    const {username,password,emailId} = req.body
    //if user already exist 
    const isUserPresent = userdata.users.some(user => user.username === username)
    if(isUserPresent){
        res.status(422).json({message: "User already present"})
    }else{
       const id= uuid()
       const newUser = {id,username,password,emailId}
       userdata.users = [...userdata.users, newUser]
       const token = jwt.sign({id: username},process.env.SECRET_KEY)
       res.json({message: `Success - Created new user --> ${username} :: ${token}`})
    }
}
const loginHandler = (req,res) => {
    const {username,password,emailId} = req.body
    const isUserVerified = userdata.users.some(user => user.username === username && user.password === password && user.emailId === emailId)
    if(isUserVerified){
        const token = jwt.sign({id:username},secretkey,{expiresIn: '24h'})
        res.json({message: "user verfied",token:token})
    }else{
        res.status(401).json({message: "invalid crendiantial"})
    }
}
module.exports = { loginHandler, signupHandler }