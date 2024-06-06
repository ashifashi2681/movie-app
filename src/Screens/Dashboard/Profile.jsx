import React from "react";
import SideBar from "./SideBar";
import { useDropzone } from "react-dropzone";
import "../../styles/profile.css";
import { FaCloudUploadAlt } from "react-icons/fa";

function Profile() {
	const { getRootProps, getInputProps } = useDropzone({
		multiple: false,
		maxSize: 100000,
		onDrop: (acceptedFiles) => {
			alert(acceptedFiles[0].name);
		},
	});

	return (
		<SideBar>
			<div>
				<h2>Profile</h2>
				<div className="upload-container" {...getRootProps()}>
					<input {...getInputProps()} />
					<span>
						<FaCloudUploadAlt />
					</span>
					<p>Drag your image here</p>
					<em>(Only *.jpeg and *.png images will be accepted)</em>
				</div>
				<form action="" className="profile-form">
					<label htmlFor="name">Name</label>
					<input type="text" placeholder="Your Name" />
					<label htmlFor="email">Email</label>
					<input type="email" placeholder="abc@gmail.com" />
					<div className="profile-form-btn">
						<button> Delete Account</button>
						<button type="submit"> Update Profile</button>
					</div>
				</form>
			</div>
		</SideBar>
	);
}

export default Profile;
