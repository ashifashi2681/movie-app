import React from "react";
import SideBar from "./SideBar";
import "../../styles/favorites.css";
import Table from "../../components/Table";
import Movies from "../../Data/MovieData";

function FavoritesMovies() {
	return (
		<SideBar>
			<div className="favorites-head">
				<h2>Favorites Movies</h2>
				<button>Delete All</button>
			</div>
            <Table data={Movies} admin={false}/>
		</SideBar>
	);
}

export default FavoritesMovies;
