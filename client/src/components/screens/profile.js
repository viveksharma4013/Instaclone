import React from 'react';

const profile=()=>{
return(
		<div style={{maxWidth:"550px",margin:"0px auto"}}>
			<div className="profile-content">
				<div>
					<img className="profile-pic" src="https://upleap.com/blog/wp-content/uploads/2018/10/how-to-create-the-perfect-instagram-profile-picture.jpg"/>	
				</div>
				<div>
					<h6>My Name</h6>
					<div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
						<h6>40 Posts</h6>
						<h6>300 Followers</h6>
						<h6>200 Following</h6>
					</div>
				</div>
			</div>
			<div className="gallery">
					<img className="posted-item" src="https://upleap.com/blog/wp-content/uploads/2018/10/how-to-create-the-perfect-instagram-profile-picture.jpg"></img>
					<img className="posted-item" src="https://upleap.com/blog/wp-content/uploads/2018/10/how-to-create-the-perfect-instagram-profile-picture.jpg"></img>
					<img className="posted-item" src="https://upleap.com/blog/wp-content/uploads/2018/10/how-to-create-the-perfect-instagram-profile-picture.jpg"></img>
					<img className="posted-item" src="https://upleap.com/blog/wp-content/uploads/2018/10/how-to-create-the-perfect-instagram-profile-picture.jpg"></img>
					<img className="posted-item" src="https://upleap.com/blog/wp-content/uploads/2018/10/how-to-create-the-perfect-instagram-profile-picture.jpg"></img>
					<img className="posted-item" src="https://upleap.com/blog/wp-content/uploads/2018/10/how-to-create-the-perfect-instagram-profile-picture.jpg"></img>
					<img className="posted-item" src="https://upleap.com/blog/wp-content/uploads/2018/10/how-to-create-the-perfect-instagram-profile-picture.jpg"></img>
					<img className="posted-item" src="https://upleap.com/blog/wp-content/uploads/2018/10/how-to-create-the-perfect-instagram-profile-picture.jpg"></img>
					<img className="posted-item" src="https://upleap.com/blog/wp-content/uploads/2018/10/how-to-create-the-perfect-instagram-profile-picture.jpg"></img>
				</div>
		</div>
		)
}

export default profile