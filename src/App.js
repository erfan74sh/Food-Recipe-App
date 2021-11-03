import { useState, useEffect } from "react";
// components
import Form from "./components/Form";

function App() {
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		const getRecipe = async () => {
			const apiKey = "9fb125e6a4c34f5db288d1e22f2832ed";

			const apiCall = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`
			);
			const data = await apiCall.json();
			console.log(data);
			setRecipes(data.results);
		};
		getRecipe();
	}, []);

	return (
		<div>
			<Form />
			{recipes.map((recipe) => {
				return <p key={recipe.id}>{recipe.title}</p>;
			})}
		</div>
	);
}

export default App;
