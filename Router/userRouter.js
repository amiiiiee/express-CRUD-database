const express=require('express');
const userControllers=require('../Controllers/userControllers')


const router=express.Router();

router.route('/')
.post(userControllers.createUser)
.get(userControllers.getUserList)
router.route('/:id')
.get(userControllers.getUser)
.put(userControllers.UpdateUser)
.delete(userControllers.deleteUser)

module.exports=router;