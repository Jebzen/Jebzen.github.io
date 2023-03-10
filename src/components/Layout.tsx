import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout({ children }: any) {
	return (
		<>
			<main className="container mx-auto">
				<h1>Layout</h1>
				{children}
			</main>
		</>
	);
}
