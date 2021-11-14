import React from "react";
// style
import "../Inputs.scss";
import "./InputSelect.scss";

const InputSelect = ({ label, placeHolder, width = "17.625rem", rMargin }) => {
	return (
		<label style={{ width: width, marginRight: rMargin }}>
			{label}
			<input type="select" placeholder={placeHolder} />
		</label>
	);
};

export default InputSelect;
