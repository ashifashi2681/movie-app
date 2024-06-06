import React from "react";
import "../../styles/Banner.css";
import Movies from "../../Data/MovieData";
import Slider from "react-slick";
import FlexMovieItems from "../FlexMovieItems";

function Banner() {
	const settings = {
		infinite: true,
		arrows: false,
		initialSlide: 1,
		autoplay: true,
	};
	return (
		<div className="banner-container">
			<Slider {...settings} className="slider">
				{Movies.map((movie) => (
					<div key={movie.name} className="slider-img">
						<img src={`./images/${movie.image}`} />
						<img src={`./images/${movie.image}`} />
						<div className="slider-contents">
							<h2>{movie.name}</h2>
							<FlexMovieItems movie={movie} />
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Banner;
