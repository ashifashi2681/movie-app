import React from "react";
import "../styles/AboutUs.css";
import Layout from "../Layout/Layout";
import Head from "../components/Head";

function AboutUs() {
	return (
		<Layout>
			<div className="about-container">
				<Head title="About Us" />
				<div className="about-grid">
					<div className="about-contents">
						<h2>Welcome to Netfilx</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Dolor, aliquam? Laboriosam praesentium
							recusandae voluptatum soluta accusantium pariatur
							eligendi ex dolore, quidem perspiciatis, laudantium
							quo aliquid cum repellat laborum nihil nostrum
							nulla. Eligendi qui, ipsam labore architecto vitae
							cumque consequuntur fugit.eligendi ex dolore, quidem
							perspiciatis, laudantium quo aliquid cum repellat
							laborum nihil nostrum nulla. Eligendi qui, ipsam
							labore architecto vitae cumque consequuntur fugit.
						</p>
                        <div className="about-cards">
                            <div>
                                <span>10K</span>
                                <span>Listed Movies</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div>
                                <span>8K</span>
                                <span>Lovely Users</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
					</div>
					<div className="about-img">
                        <img src="./images/right-img.png"/>
                    </div>
				</div>
			</div>
		</Layout>
	);
}

export default AboutUs;
