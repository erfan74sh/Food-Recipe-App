import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
	let params = useParams();
	const [specificRecipe, setSpecificRecipe] = useState({});
	useEffect(() => {
		const apiKey = "9fb125e6a4c34f5db288d1e22f2832ed";
		const getSpecificRecipe = async () => {
			const res = await fetch(
				`https://api.spoonacular.com/recipes/${params.recipeId}/information?apiKey=${apiKey}`
			);
			const data = await res.json();
			console.log(data);
			setSpecificRecipe(data);
		};
		getSpecificRecipe();
	}, []);

	return (
		<div>
			<img src={specificRecipe.image} alt={specificRecipe.title} />
			<h2>{specificRecipe.title}</h2>
		</div>
	);
};

export default Recipe;
