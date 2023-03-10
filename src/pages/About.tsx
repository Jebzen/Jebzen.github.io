import React from "react";
import { Outlet } from "react-router";

export default function About() {
	return (
		<>
			<h1>About</h1>
			<Outlet />
		</>
	);
}
