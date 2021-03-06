import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Home from "../pages/Home.js";
import Search from "../pages/Search.js";
import Recipe from "../components/Recipe";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
				<Route path="/recipe/:recipeId" element={<Recipe />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
