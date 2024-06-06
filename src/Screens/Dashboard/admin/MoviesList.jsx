import React from "react";
import Table from "../../../components/Table";
import Movies from "../../../Data/MovieData";
import SideBar from "../SideBar";
function MoviesList() {
	return (
		<SideBar>
			<div className="favorites-head">
				<h2>Movies List</h2>
				<button>Delete All</button>
			</div>
			<Table data={Movies} admin={true} />
		</SideBar>
	);
}

export default MoviesList;
