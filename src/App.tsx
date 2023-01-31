import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />;
				<Route path="/about" element={<About />} />;
				<Route path="*" element={<Home />} />
			</Routes>
		</Layout>
	);
}

export default App;
