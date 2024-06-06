import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/layout.css";
function Layout({ children }) {
	return (
		<div className="layout">
			<Nav />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
