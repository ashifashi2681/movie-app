import React, { useState } from "react";
import Title from "../Title";
import { BsBookmarkStarFill } from "react-icons/bs";
import "../../styles/MovieRates.css";
import Star from "../Star";
import { UserData } from "../../Data/MovieData";

function MovieRates({ movie }) {
	const [value, setValue] = useState(0);
	const Rating = [
		{
			title: "0 - poor",
			value: 0,
		},
		{
			title: "1 - Fair",
			value: 1,
		},
		{
			title: "2 - Good",
			value: 2,
		},
		{
			title: "3 - Very Good",
			value: 3,
		},
		{
			title: "4 - Excellent",
			value: 4,
		},
		{
			title: "5 - Masterpiece",
			value: 5,
		},
	];
	return (
		<div className="movie-rates-main-container">
			<Title title="Reviews" icon={<BsBookmarkStarFill />} />
			<div className="movie-rates-container">
				<div className="rating-side">
					<h3>Review "{movie.name}"</h3>
					<p className="rating-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Fugiat explicabo magnam, consequuntur sint{" "}
					</p>
					<span className="rating-text">Select Rating</span>
					<div>
						<select
							className="rate-select"
							name=""
							id=""
							onChange={(e) => setValue(e.target.value)}>
							{Rating.map((rate, i) => (
								<option
									className="rate-option"
									value={rate.value}
									key={i}>
									{rate.title}
								</option>
							))}
						</select>
					</div>
					<Star value={value} />
					<span className="rating-text">Message</span>
					<textarea
						name=""
						id=""
						rows={8}
						placeholder="Write Your Review..."></textarea>
					<button>Submit</button>
				</div>
				<div className="review-side">
					<h3>Reviews ({UserData.length})</h3>
					<div className="review-container">
						{UserData.map((user, i) => (
							<div key={i} className="review">
								<div className="review-img">
									<img src={`/images/${user.img}`} alt="" />
								</div>
								<div className="review-content">
									<h4>{user.fullName}</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Consectetur nulla
										blanditiis animi voluptatibus. Sunt
										vitae exercitationem molestiae vel
										perspiciatis nostrum sapiente laborum,
										in, dolorem magni autem, hic quos
										placeat ea?
									</p>
								</div>
								<div className="review-rating">
									<Star value={user.rate} />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default MovieRates;
