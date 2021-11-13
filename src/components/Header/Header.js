import React from "react";
// style
import "./Header.scss";

const Header = ({ getRecipe1 }) => {
	return (
		<header>
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
				<div className="search-and-filter__filter">filter section</div>
			</form>
		</header>
	);
};

export default Header;
