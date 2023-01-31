import { Outlet } from "react-router-dom";

export default function Layout({ children }: any) {
	return (
		<>
			<h1 className="text-3xl font-bold underline">Layout</h1>
			{children}
		</>
	);
}
