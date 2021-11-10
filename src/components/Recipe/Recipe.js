import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// style
import "./Recipe.scss";
// assets
import Loader from "../../assets/loading/Loading.svg";

const Recipe = () => {
	let params = useParams();

	const [errors, setErrors] = useState("");

	const [specificRecipe, setSpecificRecipe] = useState({});
	useEffect(() => {
		const apiKey = "9fb125e6a4c34f5db288d1e22f2832ed";
		const getSpecificRecipe = async () => {
			try {
				const res = await fetch(
					`https://api.spoonacular.com/recipes/${params.recipeId}/information?apiKey=${apiKey}`
				);
				if (!res.ok) {
					throw res.status;
				}
				const data = await res.json();
				console.log(data);
				setSpecificRecipe(data);
			} catch (e) {
				console.error(`error code: ${e}`);
				setErrors(e);
			}
		};
		getSpecificRecipe();
	}, []);

	return (
		<main className="recipe">
			{Object.keys(specificRecipe).length > 0 ? (
				<>
					<section className="recipe__info">
						<div className="recipe__info__summary">
							<h1 className="recipe__info__summary__title">
								{specificRecipe.title}
							</h1>
							<ul className="recipe__info__summary__status">
								<div>
									<li>
										<span>
											<i class="fas fa-dollar-sign"></i>
										</span>
										<span>{`$${specificRecipe.pricePerServing} per serving`}</span>
									</li>
									<li>
										<span>
											<i class="fas fa-heart"></i>
										</span>
										<span>{`${specificRecipe.aggregateLikes} likes`}</span>
									</li>
								</div>
								<div>
									<li>
										<span>
											<i class="fas fa-clock"></i>
										</span>
										<span>{`ready in ${specificRecipe.readyInMinutes} minutes`}</span>
									</li>
									<li>
										<span>
											<i class="fas fa-star"></i>
										</span>
										<span>{`Spoonacular Score: ${specificRecipe.spoonacularScore}%`}</span>
									</li>
								</div>
							</ul>
							<p
								className="recipe__info__summary__text"
								dangerouslySetInnerHTML={{ __html: specificRecipe.summary }}
							></p>
							<button type="button">
								<Link to="/">go home</Link>
							</button>
						</div>
						<img src={specificRecipe.image} alt={specificRecipe.title} />
					</section>
					<section className="recipe__instructions"></section>
				</>
			) : errors.length === 0 ? (
				<img src={Loader} />
			) : (
				<>
					<h1>Ooops! Somthing Bad Happend</h1>
					<p>Error type {errors}</p>
				</>
			)}
		</main>
	);
};

export default Recipe;
