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
				<section className="hero mt-5">
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

					<div className="d-flex mt-5 mb-5 justify-content-center justify-content-md-start">
						<a href="#contact" className="btn btn-primary btn-lg me-3">
							Contact
						</a>
						<a href="#resume" className="btn btn-primary btn-lg me-3">
							Resume
						</a>
						<a href="#projects" className="btn btn-primary btn-lg me-3">
							Projects
						</a>
					</div>
				</section>

				<section id="about">
					<header>
						<h2>About Me</h2>
					</header>
					<article>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
							sunt aliquam amet consequuntur officiis odio saepe obcaecati ipsam
							vitae, possimus architecto cupiditate sint recusandae expedita
							earum autem eum excepturi laborum.
						</p>
					</article>
				</section>

				<section id="education">
					<header>
						<h2>Education</h2>
					</header>
					<article id="bachelor">
						<h3>Web Developer | Bachelor | CPHBusiness Lyngby</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
							sunt aliquam amet consequuntur officiis odio saepe obcaecati ipsam
							vitae, possimus architecto cupiditate sint recusandae expedita
							earum autem eum excepturi laborum.
						</p>
					</article>
					<article id="academic">
						<h3>
							Multimedia Designer | Academic Graduation | CPHBusiness Lyngby
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
							sunt aliquam amet consequuntur officiis odio saepe obcaecati ipsam
							vitae, possimus architecto cupiditate sint recusandae expedita
							earum autem eum excepturi laborum.
						</p>
					</article>
					<article id="htx">
						<h3>High School | HTX | Sukkertoppen HTX</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
							sunt aliquam amet consequuntur officiis odio saepe obcaecati ipsam
							vitae, possimus architecto cupiditate sint recusandae expedita
							earum autem eum excepturi laborum.
						</p>
					</article>
				</section>

				<section id="experience">
					<header>
						<h2>Experience</h2>
					</header>
					<article id="alphasol">
						<h3>Alpha Solutions | Internship</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
							sunt aliquam amet consequuntur officiis odio saepe obcaecati ipsam
							vitae, possimus architecto cupiditate sint recusandae expedita
							earum autem eum excepturi laborum.
						</p>
					</article>
				</section>

				<section id="projects">
					<header>
						<h2>Projects</h2>
					</header>
					<article>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
							sunt aliquam amet consequuntur officiis odio saepe obcaecati ipsam
							vitae, possimus architecto cupiditate sint recusandae expedita
							earum autem eum excepturi laborum.
						</p>
					</article>
				</section>
			</main>
		</>
	);
}
