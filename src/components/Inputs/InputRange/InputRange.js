import React from "react";

const InputRange = ({ label, width = "17.625rem" }) => {
	return (
		<label style={{ width: width }}>
			{label}
			<input type="range" />
		</label>
	);
};

export default InputRange;
