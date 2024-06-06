import React from "react";
import "../styles/FlexMovieItems.css";
import {Link } from 'react-router-dom'
import { HiMiniCalendarDays, HiMiniClock, HiMiniHeart } from "react-icons/hi2";

function FlexMovieItems({ movie }) {
	return (
		<div className="flex-movie-items">
			<div className="flex-movie-detials">
				<span>{movie.category}</span>
				<div>
					<span className="f-m-icon">
						<HiMiniCalendarDays />
					</span>
					<span>{movie.year}</span>
				</div>
				<div>
					<span className="f-m-icon">
						<HiMiniClock />
					</span>
					<span>{movie.time}</span>
				</div>
			</div>
			<div className="f-m-btns">
				<Link to={`/movie/${movie.name}`}>
					<span>Watch</span>
				</Link>
				<span>
					<HiMiniHeart />
				</span>
			</div>
		</div>
	);
}

export default FlexMovieItems;
