import React from "react";
// style
import "../Inputs.scss";
import "./InputText.scss";

const InputText = ({ label, placeHolder, width = "17.625rem" }) => {
	return (
		<label style={{ width: width }}>
			{label}
			<input type="text" placeholder={placeHolder} />
		</label>
	);
};

export default InputText;
