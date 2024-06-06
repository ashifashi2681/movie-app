import React from "react";
import Title from "../Title";
import { HiFire } from "react-icons/hi";
import Movies from "../../Data/MovieData";
import Movie from "../Movie";
import '../../styles/PopularMovies.css'

function PopularMovies() {
	return (
		<div className="popular-container">
			<Title title="Popular Movies" icon={<HiFire />} />
			<div className="popular-movies">
				{Movies.slice(3, 11).map((movie) => (
					<Movie key={movie.name} movie={movie} />
				))}
			</div>
		</div>
	);
}

export default PopularMovies;
