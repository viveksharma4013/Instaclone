import React,{useEffect,useState,useContext} from 'react';
import {UserContext} from '../../App';

const Profile=()=>{
	const {state,dispatch}=useContext(UserContext);
	const [pics,setPics]=useState([])
	useEffect(()=>{
		fetch("/myposts",{
			headers:{
				"Authorization":"Bearer "+ localStorage.getItem("jwt")
			}
		}).then(res=>res.json())
		.then(result=>{
			setPics(result.mypost)
			// console.log(result.mypost)
		})
	},[])
return(
		<div style={{maxWidth:"550px",margin:"0px auto"}}>
			<div className="profile-content">
				<div>
					<img className="profile-pic" src="https://upleap.com/blog/wp-content/uploads/2018/10/how-to-create-the-perfect-instagram-profile-picture.jpg"/>	
				</div>
				<div>
					<h6>{state?state.name:"Loading..."}</h6>
					<div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
						<h6>40 Posts</h6>
						<h6>300 Followers</h6>
						<h6>200 Following</h6>
					</div>
				</div>
			</div>
			<div className="gallery">
				{
					pics.map(item=>{
						return(
						<img key={item._id} className="posted-item" src={item.photo} alt="{item.title}"></img>	
						)
					})
				}
				</div>
		</div>
		)
}

export default Profile