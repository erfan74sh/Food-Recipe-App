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
									<div className="query-foods__food-card__info__more-info">
										<Link to={`/recipe/${recipe.id}`}>
											<button type="button" className="btn btn--fill btn--sm">
												see recipe
											</button>
										</Link>
										<ul>
											<li>
												<i class="fas fa-user-friends"></i>
												<span>{recipe.servings}</span>
											</li>
											<li>
												<i class="fas fa-clock"></i>
												<span>{recipe.readyInMinutes}&#x2032;</span>
											</li>
											<li>
												<i class="fas fa-heart"></i>
												<span>{recipe.aggregateLikes}</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default Recipes;
