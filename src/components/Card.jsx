import React, { useState, useContext } from "react";
import AuthContext from "../store/AuthContext";
import Information from "./Info";
import "./style/Card.css";
const Card = (props) => {
	const ctx = useContext(AuthContext);
	const [states, setState] = useState(Information);
	const added = (id) => {
		ctx.addItem({
			id: states[id].id,
			name: states[id].name,
			price: states[id].price,
			weight: states[id].weight,
			rating: states[id].rating,
			img: states[id].img,
			Amount: states[id].Amount,
			itemCount: states[id].itemCount,
		});

		let data = {
			id: states[id].id,
			name: states[id].name,
			price: states[id].price,
			weight: states[id].weight,
			rating: states[id].rating,
			img: states[id].img,
			Amount: states[id].Amount,
			itemCount: states[id].itemCount,
		};
		props.data(data);
	};
	const handleWishList = (id) => {
		ctx.wishList(id);
	};
	return (
		<>
			{states.map((elem) => {
				// console.log(elem);
				//we can also use object destructuring here
				return (
					<div className="sub-Grid2_1" key={elem.id}>
						<div className="card_divide1">
							<div className="rating">
								<h5>⭐</h5>
								<h4 className="h4">{elem.rating}</h4>
							</div>
							<div className="heart">
								<h4>
									<img
										alt={elem.name}
										onClick={() => handleWishList(elem)}
										id={`image${elem.id}`}
										src={elem.heart}
									/>
								</h4>
							</div>
						</div>
						<div className="card_divide2">
							<div className="img">
								<img src={elem.img} alt="" />
							</div>
							<div className="details">
								<div className="nameandweight">
									{/* <div> */}
									<div className="name">{elem.name}</div>
									{/* </div> */}
									{/* <div> */}
									<h5 className="weight">{elem.weight}g</h5>
									{/* </div> */}
								</div>
								<div className="price">
									{/* <div className="prices"> */}
									<h4 className="prices">${elem.price}</h4>
									{/* </div> */}
									<div className="button">
										<img
											onClick={() => added(elem.id)}
											className="add"
											id={`add${elem.id}`}
											src={elem.addIcon}
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
export default Card;
