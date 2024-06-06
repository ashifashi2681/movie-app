import React, { useRef } from "react";
import Title from "../Title";
import { HiHeart, HiStar } from "react-icons/hi";
import "../../styles/TopRated.css";
import Slider from "react-slick";
import Movies from "../../Data/MovieData";
import Star from "../Star";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

function TopRated() {
	const slidRef = useRef(null);
	const settings = {
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 2,
		infinite: false,
		responsive: [
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="top-rated-container">
			<Title title="Top Rated" icon={<HiStar />} />
			<Slider {...settings} className="slider" ref={slidRef}>
				{Movies.map((movie) => (
					<div key={movie.name} className="t-r-slider-img">
						<img src={`./images/${movie.image}`} alt="" />
						<div className="t-r-content">
							<span>
								<HiHeart />
							</span>
							<Star value={movie.rate} />
							<h3>{movie.name}</h3>
						</div>
					</div>
				))}
			</Slider>
			<div className="t-r-s-btns">
				<button onClick={() => slidRef.current.slickPrev()}>
					<IoMdArrowDropleft />
				</button>
				<button onClick={() => slidRef.current.slickNext()}>
					<IoMdArrowDropright />
				</button>
			</div>
		</div>
	);
}

export default TopRated;
