import React from "react";
import "../styles/ContactUs.css";
import Layout from "../Layout/Layout";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import Head from "../components/Head";

function ContactUs() {
	const contactData = [
		{
			id: 1,
			title: "Email Us",
			info: "By using Vite for each project, we save a lot of learning.",
			icon: IoMailOpenOutline,
			contact: "ashifashi2681@gmail.com",
		},
		{
			id: 2,
			title: "Call Us",
			info: "By using Vite for each project, we save a lot of learning.",
			icon: MdLocalPhone,
			contact: "+919876543210",
		},
		{
			id: 1,
			title: "Location",
			info: "By using Vite for each project, we save a lot of learning.",
			icon: TiLocation,
		},
	];
	return (
		<Layout>
			<div className="contact-container">
				<Head title="Contact Us" />
				<div className="contact-grid">
					{contactData.map((contact) => (
						<div className="contact-card" key={contact.id}>
							<span>{<contact.icon />}</span>
							<span>{contact.title} </span>
							<span>
								<span>{contact.contact} </span>
								{contact.info}
							</span>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}

export default ContactUs;
