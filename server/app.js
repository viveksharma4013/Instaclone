const express=require('express')
const app=express()
const mongoose=require('mongoose')
const {MONGOURI}=require('./keys')

require('./models/user')
require('./models/post')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

// kaRj6FrjUJ3NVF6N

mongoose.connect(MONGOURI,{ useNewUrlParser: true,useUnifiedTopology:true })

mongoose.connection.on('connected',()=>{
	console.log("Connected to mongoDB")
});	

mongoose.connection.on('error',(err)=>{
	console.log("Error not connected to MongoDB")
});


app.get("/",(req,res)=>{
	res.send("Welcome")
});

app.listen(5000,()=>{
	console.log("I am listening on port 5000")
});
