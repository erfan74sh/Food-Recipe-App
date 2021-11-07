import React from "react";
// style
import "./Form.scss";

const Form = ({ getRecipe1 }) => {
	return (
		<section className="search-and-filter">
			<form onSubmit={getRecipe1} className="search-and-filter__search">
				<input type="text" name="recipeName" />
				<button>search</button>
			</form>
		</section>
	);
};

export default Form;
