import React,{useContext} from 'react';
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../App'
import '../App.css'

const Navbar=()=>{
	const history=useHistory()
	const {state,dispatch}=useContext(UserContext)
	const renderlist=()=>{
		if(state){
			return([
				<li><Link to="/profile">Profile</Link></li>,
			    <li><Link to="/createpost">Create Post</Link></li>,
			    <li><button className="waves-effect waves-light btn #1976d2 red darken-2" 
			    onClick={()=>{localStorage.clear()
			     dispatch({type:"CLEAR"})
			     history.push("/signin")
			 }}>Logout</button></li>
			])
		}else{
			return([
				<li><Link to="/signin">Signin</Link></li>,
			    <li><Link to="/signup">Signup</Link></li>
			])
		}
	}
	return(
		<div>		
		  <nav>
		    <div className="nav-wrapper white">
		      <Link to={state?"/":"/signin"} className="brand-logo left">Instagram</Link>
		      <ul id="nav-mobile" className="right">
		      	{renderlist()}
		      </ul>
		    </div>
		  </nav>
		</div>
		)
}

export default Navbar;