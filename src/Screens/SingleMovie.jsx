import React from "react";
import "../styles/SingleMovie.css";
import Layout from "../Layout/Layout";
import Movies from "../Data/MovieData";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/singleMovie/MovieInfo";
import MovieCast from "../components/singleMovie/MovieCast";
import MovieRates from "../components/singleMovie/MovieRates";
import RelatedMovies from "../components/singleMovie/RelatedMovies";

function SingleMovie() {
	const { id } = useParams();
	const movie = Movies.find((movie) => movie.name === id);
	return (
		<Layout>
			<MovieInfo movie={movie} />
			<MovieCast />
			<MovieRates movie={movie} />
			<RelatedMovies movie={movie} />
		</Layout>
	);
}

export default SingleMovie;
