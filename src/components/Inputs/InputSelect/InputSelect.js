import React from "react";
// style
import "../Inputs.scss";
import "./InputSelect.scss";

const InputSelect = ({ label, placeHolder, width = "17.625rem" }) => {
	return (
		<label style={{ width: width }}>
			{label}
			<input type="select" placeholder={placeHolder} />
		</label>
	);
};

export default InputSelect;
