import { useState, useEffect } from "react";
// components
import Form from "./components/Form";
import Recipes from "./components/Recipes";
// style
import "./App.scss";

function App() {
	const apiKey = "9fb125e6a4c34f5db288d1e22f2832ed";
	const [errors, setErrors] = useState("");

	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		const getRecipe = async () => {
			try {
				const apiCall = await fetch(
					`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=12&apiKey=${apiKey}`
				);
				if (!apiCall.ok) {
					throw apiCall.status;
				}
				const data = await apiCall.json();
				console.log(data.results);
				setRecipes(data.results);
			} catch (e) {
				console.error(`error code: ${e}`);
				setErrors(e);
			}
		};
		getRecipe();
	}, []);

	const getRecipe1 = async (e) => {
		e.preventDefault();
		const query = e.target.elements.recipeName.value;
		const apiCall = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=true&number=12&apiKey=${apiKey}`
		);
		const data = await apiCall.json();
		setRecipes(data.results);
	};
	return (
		<div className="container">
			{errors.length === 0 ? (
				<>
					<Form getRecipe1={getRecipe1} />
					<Recipes recipes={recipes} />
				</>
			) : (
				<>
					<h1>Ooops! Somthing Bad Happend</h1>
					<p>Error type {errors}</p>
				</>
			)}
		</div>
	);
}

export default App;
