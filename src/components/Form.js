import React from "react";

const Form = ({ getRecipe1 }) => {
	return (
		<form onSubmit={getRecipe1}>
			<input type="text" name="recipeName" />
			<button>search</button>
		</form>
	);
};

export default Form;
