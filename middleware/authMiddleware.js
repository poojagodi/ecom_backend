const jwt=require('jsonwebtoken')

const authMiddleware=(req,res,next)=>{
    const authHeader=req.header("Authorization")

    if(!authHeader) return res.status(401).json({message:"Invalid authorization"})

        const token=authHeader.split(" ")[1]
if(!token) return res.status(401).json({message:"No token provided"})
    try{
const verified=jwt.verify(token,process.env.JWT_SECRET)
req.user=verified
next()
}
catch(error){
    return res.status(401).json({message:"Invalid token"})
}
 
}

module.exports=authMiddleware


//Authorization:Bearer,{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDdjMzc5YzhhNzNiODViYWFmMmQwOCIsImlhdCI6MTc0MjE5MzUzOX0.IkJTg6vuIIUGcf0Xj1CnRXk_43nmO51m-s0cX96XnQ4"}
  