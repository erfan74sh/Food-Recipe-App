import { useState, useEffect } from "react";
// components
import Form from "./components/Form";
import Recipes from "./components/Recipes";
// style
import "./App.scss";

function App() {
	const apiKey = "9fb125e6a4c34f5db288d1e22f2832ed";
	let apiCall, data;

	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		const getRecipe = async () => {
			apiCall = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`
			);
			data = await apiCall.json();
			console.log(data);
			setRecipes(data.results);
		};
		getRecipe();
	}, []);

	const getRecipe1 = async (e) => {
		e.preventDefault();
		const query = e.target.elements.recipeName.value;
		apiCall = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`
		);
		data = await apiCall.json();
		setRecipes(data.results);
	};
	return (
		<div>
			<Form getRecipe1={getRecipe1} />
			<Recipes recipes={recipes} />
		</div>
	);
}

export default App;
