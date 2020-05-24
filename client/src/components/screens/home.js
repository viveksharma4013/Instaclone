import React,{useEffect,useState} from 'react';

const Home=()=>{
	const [data,setData]=useState([])
	useEffect(()=>{
		fetch("/getallpost",{
			headers:{
				"Authorization":"Bearer "+localStorage.getItem("jwt")
			}
		}).then(res=>res.json())
		.then(result=>{
			setData(result.posts)
		})
	},[])

	return(
		<div className="home" style={{maxWidth:"550px"}}>
		{
			data.map(item=>{
				return(
					<div key={item._id} className="card home-card">
					<h6>{item.postedBy.name}</h6>
					<div className="card-image">
						<img className="posted-item" src={item.photo}></img>
					</div>
					<div className="card-content">
						<i className="material-icons" style={{color:"red"}}>favorite</i>
						<h6>{item.title}</h6>
						<p>{item.body}</p>
						<input type="text" placeholder="Add a comment"/>
					</div>
					</div>
				) 
			})
		}
		</div>
		)
}

export default Home