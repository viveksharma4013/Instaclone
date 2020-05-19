const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const User=mongoose.model("User")
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const {JWT_SECRET}=require('../keys')
const requireLogin=require('../middleware/requiredlogin')

router.get('/',(req,res)=>{
	res.send("Hello");
})

router.get("/protect",requireLogin,(req,res)=>{
	res.send("you are in my territory")
})

router.post('/signup',(req,res)=>{
	const {name,email,password}=req.body
	if(!email||!name||!password){
		return res.status(422).json({error:"Please enter all the details"})
	}
	User.findOne({email:email})
	.then((savedUser)=>{
		if(savedUser){
			return res.status(422).json({error:"User already exist"})
		}
		bcrypt.hash(password,12)
		.then(hashedpass=>{
			const user=new User({
			name,email,password:hashedpass
		})
		user.save()
		.then(user=>{
			res.json({message:"Saved successfully"})
		})
		.catch(err=>{
			console.log(err)
		})
		})

	})
	.catch(err=>{
		console.log(err)
	})
	
})

router.post('/signin',(req,res)=>{
	const {email,password}=req.body
	if(!email||!password){
		return res.status(422).json({error:"Please enter email and password"})
	}
	User.findOne({email:email})
	.then(savedUser=>{
		if(!savedUser){
			return res.status(422).json({error:"Invalid email and password"})
		}
		bcrypt.compare(password,savedUser.password)
		.then(matched=>{
			if(matched){
			const token=jwt.sign({_id:savedUser._id},JWT_SECRET)
			const {_id,name,email}=savedUser
			return res.json({token,user:{_id,name,email}})
		}
		else{
			return res.status(422).json({error:"Invalid email or password"})	
		}
		}).catch(err=>{
			console.log(err)
		})
	})
	.catch(err=>{
		console.log(err)
	})
})

module.exports=router