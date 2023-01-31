import { Outlet } from "react-router";

function Home() {
	return (
		<>
			<h1>Home</h1>
			<Outlet />
		</>
	);
}

export default Home;
