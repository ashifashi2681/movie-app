import React, { Children } from "react";
import Layout from "../../Layout/Layout";
import { BsFillGridFill } from "react-icons/bs";
import { FaHeart, FaListAlt, FaUsers } from "react-icons/fa";
import { RiLockPasswordFill, RiMovie2Fill } from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import "../../styles/sidebar.css";
import { NavLink } from "react-router-dom";

function SideBar({ children }) {
	const sideLinks = [
		{
			name: "Dashboard",
			link: "/dashboard",
			icon: <BsFillGridFill />,
		},
		{
			name: "Movies List",
			link: "/movieslist",
			icon: <FaListAlt />,
		},
		{
			name: "Add Movie",
			link: "/addmovie",
			icon: <RiMovie2Fill />,
		},
		{
			name: "Categories",
			link: "/categories",
			icon: <HiViewGridAdd />,
		},
		{
			name: "Users",
			link: "/users",
			icon: <FaUsers />,
		},
		{
			name: "Update Profile",
			link: "/profile",
			icon: <FiSettings />,
		},
		{
			name: "Favorites",
			link: "/favorites",
			icon: <FaHeart />,
		},
		{
			name: "Change Password",
			link: "/password",
			icon: <RiLockPasswordFill />,
		},
	];
	return (
		<Layout>
			<div className="sidebar-container">
				<div className="sidebar">
					{sideLinks.map((link, i) => (
						<NavLink
							to={link.link}
							key={i}
							className={({ isActive }) =>
								isActive
									? "sidebar-link active"
									: "sidebar-link"
							}>
							{link.icon} {link.name}
						</NavLink>
					))}
				</div>

				<div
					data-aos="fade-up"
					data-aos-duration="900"
					className="sidebar-contents">
					{children}
				</div>
			</div>
		</Layout>
	);
}

export default SideBar;
