import React from "react";
import "../../styles/MovieInfo.css";
import { FaShare } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import { HiMiniCalendarDays, HiMiniClock } from "react-icons/hi2";
import { TiDownload } from "react-icons/ti";
import {Link} from 'react-router-dom'

function MovieInfo({ movie }) {
	return (
		<div className="m-i-container">
			<div className="m-i-img">
				<img src={`/images/${movie.image}`} alt="" />
			</div>

			<div className="m-i-details">
				<h1>{movie.name}</h1>
				<div className="flex-movie-detials">
					<span className="m-i-hd">hd 4k</span>
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
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Reprehenderit, perferendis aliquid. Facilis soluta saepe
					modi veritatis. Error, tempore? Expedita nostrum labore
					ipsum saepe repellat, aspernatur quaerat illum fuga aliquid
					voluptatum!
				</p>
				<div className="m-i-share">
					<span>
						<FaShare />
					</span>
					<span>
						Language: <span>{movie.language}</span>
					</span>
					<Link to={`/watch/${movie.name}`}>
						<button>
							<span>
								<IoIosPlay />
							</span>
							watch
						</button>
					</Link>
				</div>
			</div>

			<div className="m-i-btn">
				<button>
					download{" "}
					<span>
						<TiDownload />
					</span>
				</button>
			</div>
		</div>
	);
}

export default MovieInfo;
