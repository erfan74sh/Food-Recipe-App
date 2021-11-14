import React, { useState } from "react";
// components
import InputSelect from "../../Inputs/InputSelect";
import InputText from "../../Inputs/InputText";
// style
import "./Filters.scss";

const Filters = () => {
	const [showMoreFilters, setShowMoreFilters] = useState(false);

	return (
		<div className={`filters ${showMoreFilters ? "show-more-filters" : ""}`}>
			<header>
				<h2>Advance search</h2>
				<button
					type="button"
					onClick={() => setShowMoreFilters(!showMoreFilters)}
				>
					<span>show more</span>
					<span>
						{showMoreFilters ? (
							<i class="fas fa-times"></i>
						) : (
							<i className="fas fa-filter"></i>
						)}
					</span>
				</button>
			</header>
			<form>
				<InputText
					label="food name"
					placeHolder="enter food name"
					width="36.75rem"
				/>
				<InputSelect label="diet" placeHolder="choose diet" />
				<InputSelect label="dish type" placeHolder="choose dish type" />
			</form>
		</div>
	);
};

export default Filters;
