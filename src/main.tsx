import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import {
	BrowserRouter,
	createBrowserRouter,
	Route,
	Routes,
	RouterProvider,
} from "react-router-dom";

const root = createRoot(document.getElementById("root") as Element);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

/*
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		index: true,
		handle: "test",
	},
	{
		path: "/test",
		element: <h1>Hello</h1>,
		caseSensitive: false,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
*/
