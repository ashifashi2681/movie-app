import React from "react";
import "../styles/Head.css";
function Head({ title }) {
	return (
		<div className="head-container">
			<img src="./images/right-img.png" alt="" />
			<h1>{title} </h1>
		</div>
	);
}

export default Head;
