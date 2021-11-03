import React from "react";

const Form = ({ getRecipe }) => {
	return (
		<form onSubmit={getRecipe}>
			<input type="text" name="recipeName" />
			<button>search</button>
		</form>
	);
};

export default Form;
