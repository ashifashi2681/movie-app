import React from "react";
import SideBar from "../SideBar";
import Movies from "../../../Data/MovieData";
import { IoIosListBox } from "react-icons/io";
import { HiViewGridAdd } from "react-icons/hi";
import categoriesData from "../../../Data/CategoriesData";
import { FaUsers } from "react-icons/fa";
import "../../../styles/dashboard.css";
import Table from "../../../components/Table";

function DashBoard() {
	return (
		<SideBar>
			<h2>Dashboard</h2>
			<div className="dashboard-cards">
				<div className="d-card">
					<span>
						<IoIosListBox />
					</span>
					<div>
						<span>Total Movies</span>
						<span>{Movies.length}</span>
					</div>
				</div>

				<div className="d-card">
					<span>
						<HiViewGridAdd />
					</span>
					<div>
						<span>Total Categories</span>
						<span>{categoriesData.length}</span>
					</div>
				</div>

				<div className="d-card">
					<span>
						<FaUsers />
					</span>
					<div>
						<span>Total Users</span>
						<span>150</span>
					</div>
				</div>
			</div>

			<div className="dashboard-table">
				<Table data={Movies.slice(0, 5)} admin={true} />
			</div>
		</SideBar>
	);
}

export default DashBoard;
