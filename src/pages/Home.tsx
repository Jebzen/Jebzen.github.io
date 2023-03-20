import React, { useEffect } from "react";
import { Outlet } from "react-router";

export default function Home() {
	useEffect(() => {
		document.title = "Test Home Page";
	});
	return (
		<>
			<h1>Home</h1>
			<Outlet />
		</>
	);
}
