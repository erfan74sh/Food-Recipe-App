import React from "react";
import ReactDOM from "react-dom";
import Router from "./routes/Router";
// style
import "./index.scss";

ReactDOM.render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>,
	document.getElementById("root")
);
