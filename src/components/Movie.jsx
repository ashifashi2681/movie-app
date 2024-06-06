import React from "react";
import "../styles/movie.css";
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";

function Movie({ movie }) {
	return (
		<div className="movie-container">
			<Link to={`/movie/${movie.name}`}>
				<img src={`/images/${movie.image}`} />
			</Link>
			<div>
				<div>
					<span>{movie.name}</span>
					<span>
						<HiHeart />
					</span>
				</div>
			</div>
		</div>
	);
}

export default Movie;
