
const express=require('express');
const app=express();
const userRouter=require('./Router/userRouter.js')






app.use(express.json());

app.use('/users',userRouter)

app.post('/user',(req,res)=>{
    const {firstName,Lastname}=req.body
    const users=user.create({
        fname:firstName,lname:Lastname
    })
    res.status(200).json({
        data:{
           users
        }
    })
})

module.exports=app;



        
   
