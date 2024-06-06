import React from "react";
import "../styles/login.css";
import Layout from "../Layout/Layout";
import { RiLoginCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Login() {
	return (
		<Layout>
			<div className="login-main-container">
				<div className="login-container">
					<div className="login-brand">
						<img src="/images/logo.png" alt="" />
					</div>
					<form action="" className="login-form">
						<label htmlFor="email">Email</label>
						<input type="email" placeholder="abc@gmail.com" />
						<label htmlFor="password">Password</label>
						<input type="password" placeholder="********" />
						<button type="submit">
							<span>
								<RiLoginCircleFill />
							</span>
							Login
						</button>
					</form>
					<div className="signup-text">
						<span>
							Don't have an account?{" "}
							<span>
								{" "}
								<Link to="/register">SignUp</Link>
							</span>
						</span>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Login;
