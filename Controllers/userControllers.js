const fs = require('fs')
const path = require('path');
const filePath = path.join(__dirname, '../Data/datas.json');


let users=[];
users = JSON.parse(fs.readFileSync(filePath));

exports.createUser=(req,res)=>{
    
    const {name,email,username}=req.body;
    if(!name||!email||!username){
        return res.status(400).json({
            status:"fail",
            message:"Name,email and userName are required fields"
        })

    }
const newUser={id:users.length+1,name,email,username};
    users.push(newUser);
    console.log(users);
     fs.writeFileSync(filePath,JSON.stringify(users));

        res.status(201).json({
            status:"sucess",
            data:{
                user:newUser
            }
        })
    }

exports.getUserList=(req,res)=>{
    res.status(200).json({
        status:"sucess",
        data:{
            users,
        }
    })
}

exports.getUser=(req,res)=>{
    const id = req.params.id*1;
    const findUser=users.find((user)=>user.id===id);
    if(!findUser){
        return res.status(404).json({
            status:"fail",
            message:`user id ${id} not found`
        })
    }
    res.status(200).json({
        status:"sucess",
        data:{
            user:findUser
        }
    })
}

exports.UpdateUser=(req,res)=>{
    const id=req.params.id*1;
    const findUser=users.find((user)=>user.id===id)
    if(!findUser){
        return res.status(404).json({
            status:"fail",
            message:`user id ${id} not found`
        })
    }
    const index=users.indexOf(findUser);
        Object.assign(findUser,req.body)
        users[index]=findUser;

        res.status(200).json({
            status:"sucess",
            data:{
                user:findUser
            }
        })
    }

exports.deleteUser=(req,res)=>{
    const id=req.params.id*1;
    const deleteUser=users.find((user)=>user.id===id);
    if(!deleteUser){
        return res.status(404).json({
            status:"fail",
            message:`user id ${id} not found`
        })
    }
    const index=users.indexOf(deleteUser);
    users.splice(index,1)

    res.status(200).json({
        status:"delete",
        data:{
            user:null
        }
    })
}