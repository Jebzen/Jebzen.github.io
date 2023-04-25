import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import CodeTag from "../components/CodeTag";
import DropDownSection from "../components/DropDownSection";
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
				{/* HERO START */}
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
				{/* HERO START END */}

				{/* CONTENT START */}
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

						<DropDownSection
							title={"Web Developer"}
							id={"bachelor"}
							level={"Bachelor"}
							place={"CPHBusiness Lyngby"}
							year={"2021 - 2023"}
							startShown={true}
						>
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
						</DropDownSection>

						<DropDownSection
							title={"Multimedia Designer"}
							id={"academic"}
							level={"Academic Graduation"}
							place={"CPHBusiness Lyngby"}
							year={"2019 - 2021"}
							startShown={false}
						>
							<ul>
								<li className="mb-3">
									Front End Development <br />
									<CodeTag tag="Javascript" />
									<CodeTag tag="HTML" />
									<CodeTag tag="CSS" />
									<CodeTag tag="SCSS" />
								</li>

								<li className="mb-3">
									Back End Development <br />
									<CodeTag tag="PHP" />
									<CodeTag tag="MYSQL" />
									<CodeTag tag="Server-Side Validation" />
									<CodeTag tag="API" />
								</li>

								<li className="mb-3">
									User Experience & Design <br />
									<CodeTag tag="Illustrator" />
									<CodeTag tag="Photoshop" />
									<CodeTag tag="Premire Pro" />
									<CodeTag tag="Design concepts" />
								</li>
							</ul>
						</DropDownSection>

						<DropDownSection
							title={"High School"}
							id={"htx"}
							level={"HTX"}
							place={"Sukkertoppen HTX"}
							year={"2017 - 2019"}
							startShown={false}
						>
							<ul>
								<li className="mb-2">Communication & IT A</li>
								<li className="mb-2">English A</li>
								<li className="mb-2">SRP</li>
								<li className="mb-2">Danish A</li>
								<li className="mb-2">Math B</li>
							</ul>
						</DropDownSection>
					</section>

					<section id="experience" className="col-lg-8 mb-5 list-section">
						<header className="mb-4">
							<h2 className="fw-bold text-uppercase">Experience</h2>
						</header>

						<DropDownSection
							title={"Alpha Solutions"}
							id={"alphasol"}
							level={"Internship"}
							place={"Alpha Solutions Denmark"}
							year={"Aug 22 - Okt 22"}
							startShown={false}
						>
							<ul>
								<li className="mb-3">
									E-commerce webshop with a Headless CMS <br />
									<CodeTag tag="Vendure" />
									<CodeTag tag="Umbraco Heartcore" />
								</li>
								<li className="mb-3">
									Integration with the search engine Solr <br />
									<CodeTag tag="Java" />
									<CodeTag tag="Server" />
								</li>
								<li className="mb-3">
									CI/CD & system testing <br />
									<CodeTag tag="Github actions" />
									<CodeTag tag="Jest" />
								</li>
								<li className="mb-3">
									Background task manager with Hangfire <br />
									<CodeTag tag="ASP.NET" />
									<CodeTag tag="Asynchronous actions" />
								</li>
								<li className="mb-1">Rendered Client sided</li>
								<li className="mb-1">Login with Google Authentication</li>
							</ul>
						</DropDownSection>

						<DropDownSection
							title={"SOHOS ApS"}
							id={"multimediaintern"}
							level={"Rich Media Specialist"}
							year={"Sep 21 - Jun 22"}
							startShown={false}
						>
							<ul>
								<li className="mb-3">
									Maintenance and development for 3 websites <br />
									<CodeTag tag="WordPress" />
									<CodeTag tag="Elementor" />
									<CodeTag tag="PHP" />
									<CodeTag tag="SEO" />
									<CodeTag tag="Site Security & Backup" />
									<CodeTag tag="Migration" />
								</li>
								<li className="mb-3">
									WordPress development with Elementor <br />
									<CodeTag tag="Responsive Design" />
									<CodeTag tag="Design systems" />
								</li>
								<li className="mb-3">
									Third party intergration with Google Analytics, WPbackup, etc
									<br />
									<CodeTag tag="WPmail" />
									<CodeTag tag="Facebook Messenger" />
									<CodeTag tag="Calendly" />
									<CodeTag tag="Facebook Pixel" />
								</li>
								<li className="mb-3">
									Custom made payment form with Javascript, PHP and MYSQL <br />
									<CodeTag tag="Stripe" />
									<CodeTag tag="ESM6" />
									<CodeTag tag="Webpack" />
									<CodeTag tag="Babel" />
								</li>
								<li className="mb-1">
									Custom WordPress intergration, development and styling
								</li>
							</ul>
						</DropDownSection>
					</section>
				</section>
				{/* CONTENT END */}

				{/* PROJECTS START */}
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
				{/* PROJECTS EMD */}
			</main>
		</>
	);
}
