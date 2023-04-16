import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/extended.scss";
import "./styles/main.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.scss";

ReactDOM.createRoot(document.getElementById("root") as Element).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
