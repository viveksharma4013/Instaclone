import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import M from "materialize-css"

const Createpost=()=>{
	const history=useHistory()
	const[title,setTitle]=useState("viv")
	const[body,setBody]=useState("viv")
	const[image,setImage]=useState("")
	const[url,setUrl]=useState("")
	useEffect(()=>{
		if(url){
			fetch("/createpost",{
			method:"post",
			headers:{ 
				"Content-Type":"application/json",
				"Authorization":"Bearer "+localStorage.getItem("jwt")
			},
			body:JSON.stringify({
			title,
			body,
			picture:url
		})
		}).then(res=>res.json())
		.then(data=>{
			if(data.error){
			  M.toast({html: data.error,classes:"#c62828 red darken-2"})
			}else{
			  M.toast({html: "Image updloaded successfully",classes:"#43a047 green darken-2"})
			  history.push("/")
			}
		})
		}
	})
	const PostDetails=()=>{
		const data=new FormData()
		data.append("file",image)
		data.append("upload_preset","insta-clone")
		data.append("cloud_name","vivekscloud")
		fetch("https://api.cloudinary.com/v1_1/vivekscloud/image/upload",{
			method:"post",
			body:data
		}).then(res=>res.json())
		.then(data=>{
			setUrl(data.url)
		}).catch(err=>{
			console.log(err)
		})

	}
	return(
		<div>
			<div className="card input-field" style={{maxWidth:"550px", margin:"26px auto", padding:"30px", textAlign:"center"}}>
				<input type="text" placeholder="Title" value={title} onChange={(event)=>setTitle(event.target.value)}/>
				<input type="text" placeholder="Body" value={body} onChange={(event)=>setBody(event.target.value)}/>
				<div className="file-field input-field">
			      <div className="btn #1976d2 blue darken-2">
			        <span>Upload Image</span>
			        <input type="file" onChange={(event)=>setImage(event.target.files[0])}/>
			      </div>
			      <div className="file-path-wrapper">
			        <input className="file-path validate" type="text"/>
			      </div>
			     </div>
			     <button className="waves-effect waves-light btn #1976d2 blue darken-2 createpostsubmit" onClick={()=>PostDetails()}>Submit</button>
			</div>

		</div>
		)
}


export default Createpost