import React from "react";
import "../styles/Register.css";
import Layout from "../Layout/Layout";
import { RiLoginCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Register() {
	return (
		<Layout>
			<div className="login-main-container">
				<div className="login-container">
					<div className="login-brand">
						<img src="/images/logo.png" alt="" />
					</div>
					<form action="" className="login-form">
						<label htmlFor="name">Name</label>
						<input type="text" placeholder="Your Name" />
						<label htmlFor="email">Email</label>
						<input type="email" placeholder="abc@gmail.com" />
						<label htmlFor="password">Password</label>
						<input type="password" placeholder="********" />
						<button type="submit">
							<span>
								<RiLoginCircleFill />
							</span>
							Register
						</button>
					</form>
					<div className="signup-text">
						<span>
							Already have an account?{" "}
							<span>
								{" "}
								<Link to="/login">Login</Link>
							</span>
						</span>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Register;
