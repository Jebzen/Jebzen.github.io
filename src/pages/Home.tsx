import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
//import CV from "../assets/CV.png";

export default function Home() {
	/*
	useEffect(() => {
		document.title = "Jeppe E. Bentzen Portfolio";
	});
	*/

	return (
		<>
			<main className="container">
				<div className="top-bar"></div>
				<div className="hero">
					<div className="bg-image"></div>
					<h1>Hello</h1>
					<h1>I'm Jeppe E. Bentzen</h1>
					<h1 className="profession">
						<span>Web Developer</span>
						<span>Front-end Developer</span>
						<span>Full-stack Developer</span>
						<span>Back-end Developer</span>
						<span>Web Developer</span>
					</h1>
				</div>
			</main>
		</>
	);
}
