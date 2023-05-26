import React from "react";

export default function ContactSectionAside() {
	return (
		<aside className="col-lg-4 d-none d-lg-flex sticky-top">
			<section className="position-absolute mt-5" id="contact">
				<article className="bg-primary p-3">
					<h3 className="mb-3 fw-bold">Want to contact me?</h3>
					<p>
						Write to my personal email address at any time:{" "}
						<a href="mailto:jeb.bentzen.work@gmail.com" className="text-white">
							jeb.bentzen.work@gmail.com
						</a>
					</p>
				</article>
			</section>
		</aside>
	);
}
