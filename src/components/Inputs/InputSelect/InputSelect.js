import React from "react";
import Select from "react-select";
// style
import "../Inputs.scss";
import "./InputSelect.scss";

const InputSelect = ({ label, placeHolder, width = "17.625rem", rMargin }) => {
	const options = [
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" },
	];
	return (
		<label style={{ width: width, marginRight: rMargin }}>
			{label}
			<Select
				options={options}
				className="select-input-container"
				classNamePrefix="select-input"
			/>
		</label>
	);
};

export default InputSelect;
