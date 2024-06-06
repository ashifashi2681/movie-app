import React from "react";
import {  BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";

function Star({ value }) {
	return (
		<div>
			<span className="stars">
				{value >= 1 ? (
					<BiSolidStar />
				) : value >= 0.5 ? (
					<BiSolidStarHalf />
				) : (
					<BiStar />
				)}
			</span>
			<span className="stars">
				{value >= 2 ? (
					<BiSolidStar />
				) : value >= 1.5 ? (
					<BiSolidStarHalf />
				) : (
					<BiStar />
				)}
			</span>
			<span className="stars">
				{value >= 3 ? (
					<BiSolidStar />
				) : value >= 2.5 ? (
					<BiSolidStarHalf />
				) : (
					<BiStar />
				)}
			</span>
			<span className="stars">
				{value >= 4 ? (
					<BiSolidStar />
				) : value >= 3.5 ? (
					<BiSolidStarHalf />
				) : (
					<BiStar />
				)}
			</span>
			<span className="stars">
				{value >= 5 ? (
					<BiSolidStar />
				) : value >= 4.5 ? (
					<BiSolidStarHalf />
				) : (
					<BiStar />
				)}
			</span>
		</div>
	);
}

export default Star;
