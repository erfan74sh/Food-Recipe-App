import React from "react";
// style
import "./Header.scss";

const Header = ({ getRecipe1 }) => {
	return (
		<header>
			<section className="search-and-filter">
				<form onSubmit={getRecipe1} className="search-and-filter__search">
					<input type="text" name="recipeName" />
					<button>search</button>
				</form>
			</section>
		</header>
	);
};

export default Header;
