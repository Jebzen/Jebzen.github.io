import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
	BrowserRouter,
	createBrowserRouter,
	Route,
	Routes,
	RouterProvider,
} from "react-router-dom";
import "./index.css";

const root = createRoot(document.getElementById("root") as Element);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
