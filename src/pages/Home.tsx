import React, { useEffect } from "react";
import { Outlet } from "react-router";

export default function Home() {
	/*
	useEffect(() => {
		document.title = "Jeppe E. Bentzen Portfolio";
	});
	*/

	return (
		<>
			<main className="container">
				<div className="hero">
					<h1>Hello</h1>
					<h2>I'm Jeppe E. Bentzen</h2>
					<h2>Web Developer</h2>
				</div>
			</main>
		</>
	);
}
