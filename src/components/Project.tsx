import React from "react";

interface IProject {
	name: string;
	img: string;
	desc: string | JSX.Element;
	repoLink?: string;
	liveLink?: string;
}

export default function Project(props: IProject) {
	return (
		<section className="card">
			<img src="card-img-top" srcSet={props.img} alt={props.name} />
			<div className="card-body">
				<h3 className="card-title">{props.name}</h3>
				{typeof props.desc === "string" ? (
					<p className="card-text">{props.desc}</p>
				) : (
					<p className="card-text">{props.desc}</p>
				)}

				<div className="d-flex justify-content-between text-bold">
					{props.repoLink && (
						<a
							href={props.repoLink}
							className="btn btn-primary fw-bold"
							target="_blank"
						>
							See project repository
						</a>
					)}
					{props.liveLink && (
						<a
							href={props.liveLink}
							className="btn btn-primary fw-bold"
							target="_blank"
						>
							Live version
						</a>
					)}
				</div>
			</div>
		</section>
	);
}
