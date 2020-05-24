const mongoose=require("mongoose")
const express=require('express')
const router=express.Router()
const requireLogin=require('../middleware/requiredlogin')
const Post=mongoose.model("Post")

router.get('/getallpost',requireLogin,(req,res)=>{
	Post.find().populate("postedBy","_id name").then(posts=>{
		res.json({posts})
	})
	.catch(err=>{
		console.log(err)
	})
})

router.post('/createpost',requireLogin,(req,res)=>{
	const {title,body,picture}=req.body
	if(!title || !body ||!picture){
		return res.status(422).json({error:"enter title and body"})
	}
	req.user.password=undefined
	const post=new Post({
		title,
		body,
		photo:picture,
		postedBy:req.user
	})
	post.save().then(result=>{
		res.json({post:result})
	})
	.catch(err=>{
		console.log(err)
	})
})

 router.get('/myposts',requireLogin,(req,res)=>{
 	Post.find({postedBy:req.user._id})
 	.populate("postedBy","name _id")
 	.then(mypost=>{
 		res.json({mypost})
 	})
 	.catch(err=>{
 		console.log(err)
 	})
 })

router.put('/like',requireLogin,(req,res)=>{
	Post.findByIdAndUpdate(req.body.postId,{
		$push:{likes:req.user._id}
	},{
		new:true
	}).exec((err,result)=>{
		if(err){
			return res.status(422).json({error:err})
		}else{
			res.json(result)
		}
	})
})

router.put('/unlike',requireLogin,(req,res)=>{
	Post.findByIdAndUpdate(req.body.postId,{
		$pull:{likes:req.user._id}
	},{
		new:true
	}).exec((err,result)=>{
		if(err){
			return res.status(422).json({error:err})
		}else{
			res.json(result)
		}
	})
})

module.exports=router