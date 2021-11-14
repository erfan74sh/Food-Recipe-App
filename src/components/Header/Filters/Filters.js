import React from "react";
// style
import "./Filters.scss";

const Filters = () => {
	return (
		<div className="filters">
			<header>
				<h2>Advance search</h2>
				<button type="button">
					<span>show more</span>
					<span>
						<i className="fas fa-filter"></i>
					</span>
				</button>
			</header>
			<form>
				<input type="text" />
			</form>
		</div>
	);
};

export default Filters;
