import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from "materialize-css"

const Signin=()=>{
	const history=useHistory()
	const [email,setEmail]=useState("")
	const [password,setPassword]=useState("")
	const PostData=()=>{
		fetch("/signin",{
			method:"post",
			headers:{
				"content-Type":"Application/json"
			},
			body:JSON.stringify({
				email,
				password
			})
		}).then(res=>res.json())
		.then(data=>{
			if(data.error){
			  M.toast({html: data.error,classes:"#c62828 red darken-2"})
			}else{
				console.log(data)
				localStorage.setItem("jwt",data.token)
				localStorage.setItem("user",JSON.stringify(data.user))
			  M.toast({html: "signedin successfully",classes:"#43a047 green darken-2"})
			  history.push("/")
			}
		})
	}
	return(
		<div className="mycard">
			<div className="card auth-card input-field">
		        <h1 className="brand-logo">Instagram</h1>
		        <input type="text" placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
		        <input type="text" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
		        <button className="waves-effect waves-light btn #1976d2 blue darken-2" onClick={()=>PostData()}>button</button>
		        <Link to="/signup"><h5>Don't have an account?</h5></Link>
	      </div>
		</div>
		)

}

export default Signin