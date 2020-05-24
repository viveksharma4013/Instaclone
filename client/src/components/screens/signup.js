import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from "materialize-css"

const Signup=()=>{
	const history=useHistory()
	const [name,setName]=useState("")
	const [password,setPassword]=useState("")
	const [email,setEmail]=useState("")
	const PostData=()=>{
		if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
				M.toast	({html:"Format of email incorrect"})
			return
		}
		fetch("/signup",{
			method:"post",
			headers:{ 
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
			name,
			password,
			email
		})
		}).then(res=>res.json())
		.then(data=>{
			if(data.error){
			  M.toast({html: data.error,classes:"#c62828 red darken-2"})
			}else{
			  M.toast({html: data.message,classes:"#43a047 green darken-2"})
			  history.push("/signin")
			}
		})
	}
	return(
		<div className="mycard">
			<div className="card auth-card input-field">
		        <h1 className="brand-logo">Instagram</h1>
		        <input type="text" placeholder="Name" value={name} onChange={(event)=>setName(event.target.value)}/>
		        <input type="text" placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
		        <input type="password" placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
		        <button className="waves-effect waves-light btn #1976d2 blue darken-2" onClick={()=>PostData()}>Submit</button>
		        <Link to="/signin"><h5>Already have an account?</h5></Link>
	      	</div>
		</div>
		)
}

export default Signup