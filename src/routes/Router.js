import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import App from "../App";
import Recipe from "../components/Recipe";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/recipe/:recipeId" element={<Recipe />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
