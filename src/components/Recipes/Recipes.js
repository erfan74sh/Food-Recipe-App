import React from "react";
import { Link } from "react-router-dom";

const Recipes = ({ recipes }) => {
	return (
		<section className="query-foods">
			{recipes && (
				<div className="container">
					{recipes.map((recipe) => {
						return (
							<div key={recipe.id} className="query-foods__food-card">
								<img src={recipe.image} alt={recipe.title} />
								<div className="query-foods__food-card__info">
									<p
										className="query-foods__food-card__info__title"
										title={recipe.title}
									>
										{recipe.title}
									</p>
								</div>
								<Link to={`/recipe/${recipe.id}`}>
									<button type="button">see recipe</button>
								</Link>
							</div>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default Recipes;
