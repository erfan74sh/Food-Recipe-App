import React from "react";
// components
import Filters from "./Filters/Filters";
// style
import "./Header.scss";

const Header = ({ getRecipe1 }) => {
	return (
		<header id="header">
			<form onSubmit={getRecipe1} className="search-and-filter">
				<h1>Food Recipe App</h1>
				<div className="search-and-filter__search">
					<div>
						<input
							type="text"
							name="recipeName"
							placeholder="search for food, ingridients or..."
						/>
						<button>search</button>
					</div>
				</div>
				<Filters />
			</form>
		</header>
	);
};

export default Header;
