import React from "react";

interface IDropDownSection {
	title: string;
	id: string;
	level: string;
	place?: string;
	year: string;
	startShown: boolean;
	children: JSX.Element | any;
}

export default function DropDownSection(props: IDropDownSection) {
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
			<article id={props.id} className="mb-4">
				<header
					className="clicker"
					onClick={showEvent}
					tabIndex={0}
					onKeyDown={showEvent}
				>
					<h3>
						{props.title}
						<i
							className={
								props.startShown
									? "ps-1 bi bi-caret-right ninetydeg"
									: "ps-1 bi bi-caret-right"
							}
							id="eduweb-arrow"
						></i>
					</h3>
				</header>

				<section
					className={props.startShown ? "hideable hideable-open" : "hideable"}
					id="eduweb"
				>
					<header className="mb-4">
						<h4>{props.level}</h4>
						<h5>
							{props.place} <span>{props.year}</span>
						</h5>
					</header>

					{props.children}
				</section>
			</article>
		</>
	);
}
