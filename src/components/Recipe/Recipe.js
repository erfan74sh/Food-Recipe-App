import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// style
import "./Recipe.scss";
// assets
import Loader from "../../assets/loading/Loading.svg";

const Recipe = () => {
	const params = useParams();

	const [showInstruction, setShowInstruction] = useState(false);

	const [errors, setErrors] = useState("");

	const [instruction, setInstruction] = useState([]);
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
				setSpecificRecipe(data);
				setInstruction(data.analyzedInstructions);
			} catch (e) {
				console.error(`error code: ${e}`);
				setErrors(e);
			}
		};
		getSpecificRecipe();
	}, [params]);

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
											<i className="fas fa-dollar-sign"></i>
										</span>
										<span>{`$${specificRecipe.pricePerServing} per serving`}</span>
									</li>
									<li>
										<span>
											<i className="fas fa-heart"></i>
										</span>
										<span>{`${specificRecipe.aggregateLikes} likes`}</span>
									</li>
								</div>
								<div>
									<li>
										<span>
											<i className="fas fa-clock"></i>
										</span>
										<span>{`ready in ${specificRecipe.readyInMinutes} minutes`}</span>
									</li>
									<li>
										<span>
											<i className="fas fa-star"></i>
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
					<section className="recipe__instructions">
						<div className="recipe__instructions__title">
							<h2 onClick={() => setShowInstruction(!showInstruction)}>
								Instruction
							</h2>
							<i
								className={`fas fa-angle-down ${
									showInstruction ? "move-up" : ""
								}`}
								onClick={() => setShowInstruction(!showInstruction)}
							></i>
						</div>
						<ul
							className={`recipe__instructions__steps ${
								showInstruction ? "show-instruction" : ""
							}`}
						>
							{instruction.map((item) => {
								return item.steps.map((step) => {
									return (
										<li key={step.number}>
											<span>{step.number}.</span>
											<p>{step.step}</p>
										</li>
									);
								});
							})}
						</ul>
					</section>
				</>
			) : errors.length === 0 ? (
				<img src={Loader} alt="loader" />
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
