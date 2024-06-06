import React from "react";
import { HiMiniUser } from "react-icons/hi2";
import "../../styles/promos.css";

function Promos() {
	return (
		<div className="promos-container">
			<div className="p-contents">
				<h2>Download Your Favourites Shows Without Any Limits.</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Sint molestiae hic possimus mollitia facilis debitis
					officiis. Porro similique ea eaque temporibus beatae
					doloremque saepe molestias neque odio recusandae, facere
					vel.
				</p>
				<div className="promos-btns">
					<div>
						<span>HD 4K</span>
					</div>
					<div>
						<span>
							<HiMiniUser />
						</span>
						<span>2K</span>
					</div>
				</div>
			</div>
			<div className="p-img">
				<img src="./images/phone.png" />
			</div>
		</div>
	);
}

export default Promos;
