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
				<section className="hero mt-5">
					<div className="bg-image mb-5 mb-md-0"></div>
					<h1>Hello!</h1>
					<h1>I'm Jeppe E. Bentzen</h1>

					<h1 className="profession">
						<span>Web Developer</span>
						<span>Front-end Developer</span>
						<span>Full-stack Developer</span>
						<span>Back-end Developer</span>
						<span>Web Developer</span>
					</h1>

					<div className="d-flex mt-5 mb-5 justify-content-around justify-content-md-start">
						<a
							href="#contact"
							className="d-none d-lg-block btn btn-primary btn-lg me-md-3"
						>
							Contact
						</a>
						<a
							href="#contact-phone"
							className="d-lg-none btn btn-primary btn-lg me-md-3"
						>
							Contact
						</a>
						<a href="#resume" className="btn btn-primary btn-lg me-md-3">
							Resume
						</a>
						<a href="#projects" className="btn btn-primary btn-lg">
							Projects
						</a>
					</div>
				</section>

				<section className="row flex-wrap" id="content">
					<section id="about" className="col-lg-8 mb-5">
						<header className="mb-4 fw-bold text-uppercase">
							<h2>About Me</h2>
						</header>
						<article>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Incidunt sunt aliquam amet consequuntur officiis odio saepe
								obcaecati ipsam vitae, possimus architecto cupiditate sint
								recusandae expedita earum autem eum excepturi laborum.
							</p>
						</article>
					</section>

					<aside className="col-lg-4 d-none d-lg-flex sticky-top">
						<section className="position-absolute mt-5" id="contact">
							<article className="bg-primary p-3">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Incidunt sunt aliquam amet consequuntur officiis odio saepe
									obcaecati ipsam vitae, possimus architecto cupiditate sint
									recusandae expedita earum autem eum excepturi laborum.
								</p>
							</article>
						</section>
					</aside>

					<section id="education" className="col-lg-8 mb-5 list-section">
						<header className="mb-4 fw-bold text-uppercase">
							<h2>Education</h2>
						</header>

						<article id="bachelor" className="mb-4">
							<header>
								<h3>
									Web Developer <i className="bi bi-caret-right-fill"></i>
								</h3>
							</header>
							<section className="hidable" id="eduweb">
								<header className="mb-4">
									<h4>Bachelor</h4>
									<h5>CPHBusiness Lyngby</h5>
								</header>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Incidunt sunt aliquam amet consequuntur officiis odio saepe
									obcaecati ipsam vitae, possimus architecto cupiditate sint
									recusandae expedita earum autem eum excepturi laborum.
								</p>
							</section>
						</article>

						<article id="academic" className="mb-4">
							<header>
								<h3>Multimedia Designer</h3>
							</header>
							<section className="hidable" id="edumul">
								<header className="mb-4">
									<h4>Academic Graduation</h4>
									<h5>CPHBusiness Lyngby</h5>
								</header>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Incidunt sunt aliquam amet consequuntur officiis odio saepe
									obcaecati ipsam vitae, possimus architecto cupiditate sint
									recusandae expedita earum autem eum excepturi laborum.
								</p>
							</section>
						</article>

						<article id="htx" className="mb-4">
							<header>
								<h3>High School</h3>
								<h4>HTX</h4>
								<h5>Sukkertoppen HTX</h5>
							</header>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Incidunt sunt aliquam amet consequuntur officiis odio saepe
								obcaecati ipsam vitae, possimus architecto cupiditate sint
								recusandae expedita earum autem eum excepturi laborum.
							</p>
						</article>
					</section>

					<section id="experience" className="col-lg-8 mb-5 list-section">
						<header className="mb-4 fw-bold text-uppercase">
							<h2>Experience</h2>
						</header>
						<article id="alphasol" className="mb-4">
							<h3>Alpha Solutions | Internship</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Incidunt sunt aliquam amet consequuntur officiis odio saepe
								obcaecati ipsam vitae, possimus architecto cupiditate sint
								recusandae expedita earum autem eum excepturi laborum.
							</p>
						</article>
						<article id="multimediaintern" className="mb-4">
							<h3>Multimedia Designer | Internship</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Incidunt sunt aliquam amet consequuntur officiis odio saepe
								obcaecati ipsam vitae, possimus architecto cupiditate sint
								recusandae expedita earum autem eum excepturi laborum.
							</p>
						</article>
					</section>

					<section id="projects" className="col-lg-8 mb-5">
						<header className="mb-4 fw-bold text-uppercase">
							<h2>Projects</h2>
						</header>
						<article>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Incidunt sunt aliquam amet consequuntur officiis odio saepe
								obcaecati ipsam vitae, possimus architecto cupiditate sint
								recusandae expedita earum autem eum excepturi laborum.
							</p>
						</article>
					</section>
				</section>
			</main>
		</>
	);
}
