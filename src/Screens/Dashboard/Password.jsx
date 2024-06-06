import React from "react";
import SideBar from "./SideBar";

function Password() {
	return (
		<SideBar>
			<h2 style={{ marginBottom: "1.5rem" }}>password</h2>
			<form action="" className="profile-form">
				<label htmlFor="password">Previous Password</label>
				<input type="password" placeholder="************" />
				<label htmlFor="password">New Password</label>
				<input type="password" placeholder="************" />
				<label htmlFor="password">confirm Password</label>
				<input type="password" placeholder="************" />
				<div className="profile-form-btn">
					<button type="submit"> Change Password</button>
				</div>
			</form>
		</SideBar>
	);
}

export default Password;
