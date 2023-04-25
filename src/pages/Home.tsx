import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
//import CV from "../assets/CV.png";

export default function Home() {
	/*
	useEffect(() => {
		document.title = "Jeppe E. Bentzen Portfolio";
	});
	*/

	function showEvent(e) {
		if (e.key != undefined && e.key != "Enter") {
			return;
		}

		const target = e.currentTarget.nextElementSibling;
		const arrow = e.currentTarget.querySelector(".bi.bi-caret-right");

		if (!target.classList.contains("hideable-open")) {
			target.classList.add("hideable-open");
			arrow.classList.add("ninetydeg");
		} else {
			target.classList.remove("hideable-open");
			arrow.classList.remove("ninetydeg");
		}
	}

	return (
		<>
			<main className="container">
				<section className="hero mt-5">
					<div className="bg-image mb-5 mb-md-0"></div>
					<h1>Hello!</h1>
					<h1>I'm Jeppe Emil Bentzen</h1>

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
								I am a young 23 year old Web Developer with a bachelor in web
								development, and I have a special interest in quality assurance
								and quality assessment. I have been a tutor during my time as a
								web developer, and I have an interest in new and modern web
								technologies in terms of what works best for me and my projects.
								I still follow the news about web development, and I always try
								to have a little knowledge of most web technologies.
							</p>
						</article>
					</section>

					<aside className="col-lg-4 d-none d-lg-flex sticky-top">
						<section className="position-absolute mt-5" id="contact">
							<article className="bg-primary p-3">
								<h3 className="mb-3">Want to contact me?</h3>
								<p>
									Write to my personal email adress at any time;{" "}
									<a
										href="mailto:jeb.bentzen.work@gmail.com"
										className="text-white"
									>
										jeb.bentzen.work@gmail.com
									</a>
								</p>
							</article>
						</section>
					</aside>

					<section id="education" className="col-lg-8 mb-5 list-section">
						<header className="mb-4 fw-bold text-uppercase">
							<h2>Education</h2>
						</header>

						<article id="bachelor" className="mb-4">
							<header
								className="clicker"
								onClick={showEvent}
								tabIndex={0}
								onKeyDown={showEvent}
							>
								<h3>
									Web Developer
									<i
										className="ps-1 bi bi-caret-right ninetydeg"
										id="eduweb-arrow"
									></i>
								</h3>
							</header>

							<section className="hideable hideable-open" id="eduweb">
								<header className="mb-4">
									<h4>Bachelor</h4>
									<h5>
										CPHBusiness Lyngby <span>2021 - 2023</span>
									</h5>
								</header>

								<ul>
									<li className="mb-3">
										Front End Development <br />
										<span className="badge text-bg-primary me-2">
											Typescript
										</span>
										<span className="badge text-bg-primary me-2">React</span>
										<span className="badge text-bg-primary me-2">Webpack</span>
										<span className="badge text-bg-primary me-2">Firebase</span>
										<span className="badge text-bg-primary me-2">
											Javascript
										</span>
									</li>

									<li className="mb-3">
										Back End Development <br />
										<span className="badge text-bg-primary me-2">C#</span>
										<span className="badge text-bg-primary me-2">ASP.NET</span>
										<span className="badge text-bg-primary me-2">Python</span>
										<span className="badge text-bg-primary me-2">Testing</span>
										<span className="badge text-bg-primary me-2">MSSQL</span>
									</li>

									<li className="mb-3">
										User Experience & Design <br />
										<span className="badge text-bg-primary me-2">
											Design conventions
										</span>
										<span className="badge text-bg-primary me-2">
											User testing
										</span>
										<span className="badge text-bg-primary me-2">
											User flow
										</span>
										<span className="badge text-bg-primary me-2">
											User recognition
										</span>
										<span className="badge text-bg-primary me-2">
											Atomic design
										</span>
									</li>
								</ul>
							</section>
						</article>

						<article id="academic" className="mb-4">
							<header
								className="clicker"
								onClick={showEvent}
								tabIndex={0}
								onKeyDown={showEvent}
							>
								<h3>
									Multimedia Designer
									<i className="ps-1 bi bi-caret-right" id="edumul-arrow"></i>
								</h3>
							</header>

							<section className="hideable" id="edumul">
								<header className="mb-4">
									<h4>Academic Graduation</h4>
									<h5>
										CPHBusiness Lyngby <span>2019 - 2021</span>
									</h5>
								</header>

								<ul>
									<li className="mb-3">
										Front End Development <br />
										<span className="badge text-bg-primary me-2">
											Javascript
										</span>
										<span className="badge text-bg-primary me-2">HTML</span>
										<span className="badge text-bg-primary me-2">CSS</span>
										<span className="badge text-bg-primary me-2">SCSS</span>
									</li>

									<li className="mb-3">
										Visual identity and Graphic Design <br />
										<span className="badge text-bg-primary me-2">
											Illustrator
										</span>
										<span className="badge text-bg-primary me-2">
											Photoshop
										</span>
										<span className="badge text-bg-primary me-2">
											Design concepts
										</span>
									</li>

									<li className="mb-3">
										Back End Development <br />
										<span className="badge text-bg-primary me-2">PHP</span>
										<span className="badge text-bg-primary me-2">MYSQL</span>
										<span className="badge text-bg-primary me-2">
											Server-Side Validation
										</span>
										<span className="badge text-bg-primary me-2">API's</span>
									</li>
								</ul>
							</section>
						</article>

						<article id="htx" className="mb-4">
							<header
								className="clicker"
								onClick={showEvent}
								tabIndex={0}
								onKeyDown={showEvent}
							>
								<h3>
									High School
									<i
										className="ps-1 bi bi-caret-right"
										id="high-school-arrow"
									></i>
								</h3>
							</header>

							<section className="hideable" id="high-school">
								<header>
									<h4>HTX</h4>
									<h5>Sukkertoppen HTX 2017 - 2019</h5>
									<ul>
										<li className="mb-3">Communication & IT A</li>
										<li className="mb-3">English A</li>
										<li className="mb-3">SRP</li>
										<li className="mb-3">Danish A</li>
										<li className="mb-3">Math B</li>
									</ul>
								</header>
							</section>
						</article>
					</section>

					<section id="experience" className="col-lg-8 mb-5 list-section">
						<header className="mb-4 fw-bold text-uppercase">
							<h2>Experience</h2>
						</header>

						<article id="alphasol" className="mb-4">
							<header
								className="clicker"
								onClick={showEvent}
								tabIndex={0}
								onKeyDown={showEvent}
							>
								<h3>
									Alpha Solutions
									<i
										className="ps-1 bi bi-caret-right"
										id="high-school-arrow"
									></i>
								</h3>
							</header>

							<section className="hideable" id="exp-alhpa">
								<h4>Internship</h4>
								<ul>
									<li>E-commerce webshop with a Headless CMS</li>
									<li>Rendered Client sided</li>
									<li>Integration with the search engine Solr.</li>
									<li>Login with Google Authentication</li>
									<li>CI/CD & system testing</li>
									<li>Background task manager with Hangfire</li>
								</ul>
							</section>
						</article>

						<article id="multimediaintern" className="mb-4">
							<header
								className="clicker"
								onClick={showEvent}
								tabIndex={0}
								onKeyDown={showEvent}
							>
								<h3>
									SOHOS ApS
									<i
										className="ps-1 bi bi-caret-right"
										id="high-school-arrow"
									></i>
								</h3>
							</header>

							<section className="hideable" id="exp-multi">
								<h4>Rich Media Specialist</h4>
								<ul>
									<li>Maintenance and development for 3 websites</li>
									<li>WordPress development with Elementor</li>
									<li>
										Third party intergration with Google Analytics, WPbackup,
										etc.
									</li>
									<li>
										Custom made Webshop form with Javascript, PHP and MYSQL
									</li>
									<li>
										Custom WordPress intergration, development and styling
									</li>
								</ul>
							</section>
						</article>
					</section>
				</section>

				<section id="projects" className="mb-5">
					<header className="mb-4 fw-bold text-uppercase">
						<h2>Projects</h2>
					</header>
					<article>
						<h3>TBA</h3>
					</article>
				</section>
			</main>
		</>
	);
}
