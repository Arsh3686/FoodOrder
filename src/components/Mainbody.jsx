import React from "react";

import "./style/Main_body.css";
import Grid3 from "./Cards/Grid3";
import Grid1 from "./Cards/Grid1";
import Card from "./Card";
import { useState } from "react";

const Mainbody = (props) => {
	const [IsLooged] = useState(false);
	const [state, setState] = useState(false);
	const getData = (prop) => {
		props.takeData(prop);
		if (prop) {
			setState(!state);
		}
		console.log("props taken", prop);
	};
	const forUpdate = (prop) => {
		console.log("for update", prop);
		// setIsLooged(!IsLooged);
	};
	return (
		<div>
			<div className="Grid">
				<Grid1 LoggedIn={IsLooged} />
				<div className="Grid2">
					<div className="sub-Grid2">
						<Card data={getData} /> {/* using normal fs*/}
						{/* <CardM */}
						{/* <CardMongo data={getData} /> using mongoDb */}
					</div>
				</div>
				<div className="Grid3">
					<Grid3 is={state} checkLogin={forUpdate} />
				</div>
			</div>
		</div>
	);
};

export default Mainbody;
