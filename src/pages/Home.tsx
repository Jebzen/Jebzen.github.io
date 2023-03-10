import React from "react";
import { Outlet } from "react-router";

export default function Home() {
	return (
		<>
			<h1>Home</h1>
			<Outlet />
		</>
	);
}
