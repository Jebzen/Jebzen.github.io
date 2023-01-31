import { Outlet } from "react-router";

export default function Home() {
	return (
		<>
			<h1>404 not found</h1>
			<Outlet />
		</>
	);
}
