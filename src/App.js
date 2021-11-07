import { useState, useEffect } from "react";
// components
import Form from "./components/Form";
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

			<section className="query-foods">
				<div className="container">
					{recipes.map((recipe) => {
						return (
							<div key={recipe.id} className="query-foods__food-card">
								<img src={recipe.image} alt={recipe.title} />
								<div className="query-foods__food-card__info">
									<p className="query-foods__food-card__info__title">
										{recipe.title}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
}

export default App;
