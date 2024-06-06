import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Filter from "../components/movies/Filter";
import "../styles/movies.css";
import MoviesData from "../Data/MovieData";
import Movie from "../components/Movie";
function Movies() {
	const [page, setPage] = useState(4)
	return (
		<Layout>
			<div className="movies-container">
				<Filter />
				<div>
					<span>
						Total <span>{MoviesData.slice(0, page).length}</span> items
						Found
					</span>
					<div className="movies-grid">
						{MoviesData.slice(0, page).map((movie, i) => (
							<Movie key={i} movie={movie} />
						))}
					</div>
					<button onClick={() => setPage(page + 4)}>Load More</button>
				</div>
			</div>
		</Layout>
	);
}

export default Movies;
