//creating a middleware to verify token
const jwt = require("jsonwebtoken")

const authVerify = (req,res, next) => {
    const token = req.headers.authorization
    try{
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
      req.user= {userId: decodedToken.id}
      return next()
    }catch(err){
        console.error(`error from server ${JSON.stringify(err)}`)
        return res.status(401).json({ error: "Invalid or expired token" }) 
  }
}
module.exports = authVerify