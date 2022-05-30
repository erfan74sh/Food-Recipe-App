import React, { useState } from "react";
// import Select from "react-select";
// components
import InputSelect from "../../Inputs/InputSelect";
import InputText from "../../Inputs/InputText";
import InputRange from "../../Inputs/InputRange/InputRange";
// style
import "./Filters.scss";

const Filters = () => {
	const [showMoreFilters, setShowMoreFilters] = useState(false);

	// const options = [
	// 	{ value: "chocolate", label: "Chocolate" },
	// 	{ value: "strawberry", label: "Strawberry" },
	// 	{ value: "vanilla", label: "Vanilla" },
	// ];

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
				{/* <Select options={options} /> */}
				<InputSelect label="dish type" placeHolder="choose dish type" />
				<InputSelect
					label="include cuisine"
					placeHolder="choose cuisine to include"
				/>
				<InputSelect
					label="exclude cuisine"
					placeHolder="choose cuisine to exclude"
				/>
				<InputText
					label="include ingridients"
					placeHolder="enter ingridient(s) to include"
				/>
				<InputText
					label="exclude ingridients"
					placeHolder="enter ingridient(s) to exclude"
				/>
				<InputRange label="calories range" />
				<InputRange label="carbs range" />
				<InputRange label="protein range" />
				<InputRange label="fat range" />
				<InputSelect label="intolerances" placeHolder="choose intolerances" />
				<InputSelect
					label="ready time"
					placeHolder="enter ready time"
					width="8.0625rem"
				/>
				<InputSelect
					label="ready time"
					placeHolder="enter ready time"
					width="8.0625rem"
					rMargin="auto"
				/>
				<div>
					<button type="button">reset</button>
					<button type="button">search</button>
				</div>
			</form>
		</div>
	);
};

export default Filters;
