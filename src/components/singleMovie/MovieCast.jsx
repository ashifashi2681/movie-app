import React from "react";
import "../../styles/MovieCast.css";
import Title from "../Title";
import { HiUsers } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import casts from "../../Data/CastData";

function MovieCast() {
	return (
		<div className="m-c-container">
			<Title title="Cast" icon={<HiUsers />} />
			<Swiper
				className="m-c-swiper"
				loop={true}
				freeMode={true}
				slidesPerView={6}
				spaceBetween={20}
				autoplay={{
					delay: 2500,
				}}
				modules={[Autoplay, FreeMode]}
				breakpoints={{
					0: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
					800: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 6,
						spaceBetween: 30,
					},
				}}>
				{casts.map((cast, i) => (
					<SwiperSlide key={i} className="m-c-slide">
						<div className="m-c-img">
							<img src={`/images/${cast.image}`} alt="" />
						</div>
						{/* <span>{cast.name}</span> */}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default MovieCast;
