const jwt=require('jsonwebtoken')
const  mongoose = require('mongoose')
const User=mongoose.model("User")

module.exports=(req,res,next)=>{
   const {authorization}= req.headers;
   if(!authorization){
    return res.send(401).send({error:"YOu must be logged in,Key not given"});

   }
   const token=authorization.replace("Bearer","")
   jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
    if(err){
        return res.status(401).json({error:"YOu must be logged in,token invalid"});
    }
    const {_id}=payload;
    User.findById(_id).then(userdata=>{
        req.user=userdata;
        next();
    })
    })
   next();
}