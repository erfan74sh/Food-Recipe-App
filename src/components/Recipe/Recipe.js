import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// style
import "./Recipe.scss";

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
		<main className="recipe">
			<section className="recipe__info">
				<div className="recipe__info__summary">
					<h2>{specificRecipe.title}</h2>
					<ul className="recipe__info__summary__status">
						<li>
							<span>icon</span>
							<span>{`$${specificRecipe.pricePerServing} per serving`}</span>
						</li>
						<li>
							<span>icon</span>
							<span>{`${specificRecipe.aggregateLikes} likes`}</span>
						</li>
						<li>
							<span>icon</span>
							<span>{`ready in ${specificRecipe.readyInMinutes} minutes`}</span>
						</li>
						<li>
							<span>icon</span>
							<span>{`Spoonacular Score: ${specificRecipe.spoonacularScore}%`}</span>
						</li>
					</ul>
					<p className="recipe__info__summary__text">
						{specificRecipe.summary}
					</p>
				</div>
				<img src={specificRecipe.image} alt={specificRecipe.title} />
			</section>
			<section className="recipe__instructions"></section>
		</main>
	);
};

export default Recipe;
