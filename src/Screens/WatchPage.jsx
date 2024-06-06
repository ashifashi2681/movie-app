import React, { useState } from "react";
import "../styles/watchPage.css";
import Layout from "../Layout/Layout";
import Movies from "../Data/MovieData";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { IoHeart, IoPlayCircle } from "react-icons/io5";
import { IoIosDownload, IoMdPlay } from "react-icons/io";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
function WatchPage() {
	const { id } = useParams();
	const movie = Movies.find((movie) => movie.name === id);
	const [play, setPlay] = useState(false);
	return (
		<Layout>
			<div className="watch-container">
				<div className="btn-head">
					<Link to={`/movie/${movie.name}`}>
						<button>
							<span>
								<FaArrowLeft />
							</span>
							{movie.name}
						</button>
					</Link>
					<div className="btn-head-right">
						<button>
							<IoHeart />
						</button>
						<button>
							<span>
								<IoIosDownload />
							</span>
							Download
						</button>
					</div>
				</div>
				<div className="video-container">
					{play ? (
						<ReactPlayer width={"100%"} height={"100%"} controls url={movie.video} />
					) : (
						<div className="video-thumbline">
							<span onClick={() => setPlay(true)}>
								<IoPlayCircle />
							</span>
							<img src={`/images/${movie.image}`} />
						</div>
					)}
				</div>
			</div>
		</Layout>
	);
}

export default WatchPage;
