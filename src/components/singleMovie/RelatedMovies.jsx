import React from "react";
import Movies from "../../Data/MovieData";
import Title from "../Title";
import { HiFire } from "react-icons/hi";
import Movie from "../Movie";
import "../../styles/relatedMovies.css";

function RelatedMovies({ movie }) {
	const relatedMovies = Movies.filter(
		(movi) => movi.category === movie.category
	);
	return (
		<div className="related-movies-container">
			<Title title="Related Movies" icon={<HiFire />} />
			<div className="related-movies">
				{relatedMovies.map((movie, i) => (
					<Movie key={i} movie={movie} />
				))}
			</div>
		</div>
	);
}

export default RelatedMovies;
