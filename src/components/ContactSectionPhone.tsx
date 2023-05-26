import React from "react";

export default function ContactSectionPhone() {
	return (
		<section className="mb-5 d-flex d-lg-none" id="contact-phone">
			<article className="bg-primary p-3">
				<h3 className="mb-3 fw-bold">Want to contact me?</h3>
				<p>
					Write to my work email address at any time:{" "}
					<a href="mailto:jeb.bentzen.work@gmail.com" className="text-white">
						jeb.bentzen.work@gmail.com
					</a>
				</p>
			</article>
		</section>
	);
}
