import { useState, useContext } from "react";
import AuthContext from "../../store/AuthContext";

const Grid3middle = (props) => {
	const ctx = useContext(AuthContext);

	return (
		<div className="itemsorderlayout">
			<div className="imgmnameandweight">
				<div>
					<img src={props.src} alt="props.name" />
				</div>
			</div>
			<div className="mnameandweight">
				<h3 className="mname">{props.name}</h3>
				{/* <div className="priceandweight">
						<h5>{props.weight}g</h5>
						<h5 className="price">${props.price}</h5>
					</div> */}
			</div>

			<div className="addorremove">
				<button className="minus" onClick={() => props.onRem()}>
					<h4>-</h4>
				</button>
				<button className="noofitems">
					<h4>{props.Amount}</h4>
				</button>
				<button className="plus" onClick={() => props.onAdd()}>
					<h4>+</h4>
				</button>
			</div>
			{/* <div className="remove">*</div> */}
		</div>
	);
};

export default Grid3middle;
