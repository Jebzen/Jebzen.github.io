import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import CodeTag from "../components/CodeTag";
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
					<section className="mb-5 d-flex d-lg-none" id="contact-phone">
						<article className="bg-primary p-3">
							<h3 className="mb-3 fw-bold">Want to contact me?</h3>
							<p>
								Write to my personal email adress at any time:{" "}
								<a
									href="mailto:jeb.bentzen.work@gmail.com"
									className="text-white"
								>
									jeb.bentzen.work@gmail.com
								</a>
							</p>
						</article>
					</section>

					<section id="about" className="col-lg-8 mb-5">
						<header className="mb-4">
							<h2 className="fw-bold text-uppercase">About Me</h2>
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
								<h3 className="mb-3 fw-bold">Want to contact me?</h3>
								<p>
									Write to my personal email adress at any time:{" "}
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
						<header className="mb-4">
							<h2 className="fw-bold text-uppercase">Education</h2>
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
										<CodeTag tag="Typescript" />
										<CodeTag tag="React" />
										<CodeTag tag="Webpack" />
										<CodeTag tag="Firebase" />
										<CodeTag tag="Javascript" />
									</li>

									<li className="mb-3">
										Back End Development <br />
										<CodeTag tag="C#" />
										<CodeTag tag="ASP.NET" />
										<CodeTag tag="Python" />
										<CodeTag tag="Testing" />
										<CodeTag tag="MSSQL" />
									</li>

									<li className="mb-3">
										User Experience & Design <br />
										<CodeTag tag="Design conventions" />
										<CodeTag tag="User testing" />
										<CodeTag tag="User flow" />
										<CodeTag tag="User recognition" />
										<CodeTag tag="Atomic design" />
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
										<CodeTag tag="Javascript" />
										<CodeTag tag="HTML" />
										<CodeTag tag="CSS" />
										<CodeTag tag="SCSS" />
									</li>

									<li className="mb-3">
										Visual identity and Graphic Design <br />
										<CodeTag tag="Illustrator" />
										<CodeTag tag="Photoshop" />
										<CodeTag tag="Premire Pro" />
										<CodeTag tag="Design concepts" />
									</li>

									<li className="mb-3">
										Back End Development <br />
										<CodeTag tag="PHP" />
										<CodeTag tag="MYSQL" />
										<CodeTag tag="Server-Side Validation" />
										<CodeTag tag="API" />
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
										<li className="mb-2">Communication & IT A</li>
										<li className="mb-2">English A</li>
										<li className="mb-2">SRP</li>
										<li className="mb-2">Danish A</li>
										<li className="mb-2">Math B</li>
									</ul>
								</header>
							</section>
						</article>
					</section>

					<section id="experience" className="col-lg-8 mb-5 list-section">
						<header className="mb-4">
							<h2 className="fw-bold text-uppercase">Experience</h2>
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
						<h2 className="fw-bold text-uppercase">Projects</h2>
					</header>
					<article>
						<center>
							<h3>TBA</h3>
						</center>
					</article>
				</section>
			</main>
		</>
	);
}
