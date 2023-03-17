import React, { useState, useContext } from "react";
import AuthContext from "../store/AuthContext";
import Information from "./Info";
import "./style/Card.css";
import dotenv from "dotenv";
import { useEffect } from "react";

dotenv.config();
// import { AuthStore } from "./store/compo";
// export const AuthContext = React.createContext({});
const CardMongo = (props) => {
	// const ctx = useContext(AuthContext);

	const [states, setState] = useState(Information);
	const [isClicked, setIsClicked] = useState(false);
	const [clicked, setClicked] = useState(false);
	const [order, setOrder] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3001/")
			.then((re) => {
				console.log("Errre", re);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	// console.log(process.env);
	const added = (id) => {
		// const addbtn = document.querySelector(`#add${id}`);
		// console.log(id);
		// ctx.addItem({
		// 	id: states[id].id,
		// 	name: states[id].name,
		// 	price: states[id].price,
		// 	weight: states[id].weight,
		// 	rating: states[id].rating,
		// 	img: states[id].img,
		// 	Amount: states[id].Amount,
		// 	itemCount: states[id].itemCount,
		// });

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
		fetch("http://localhost:3001/todos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				console.log("res fetch", res.body);
				return res.json();
			})
			.catch((err) => {
				console.error(err);
			});

		// setOrder((prev) => {
		// 	return [...prev, obj];
		// });
		props.data(data);
		// return !clicked === true
		// 	? (addbtn.src = "/images/checked.png")
		// 	: "/images/add.png";
	};

	return (
		<>
			{states.map((elem) => {
				// console.log(elem);
				//we can also use object destructuring here
				return (
					<div
						// onClick={}
						className="sub-Grid2_1"
						key={elem.id}>
						<div className="card_divide1">
							<div className="rating">
								<h5>⭐</h5>
								<h4 className="h4">{elem.rating}</h4>
							</div>
							<div className="heart">
								<h4>
									<img
										alt={elem.name}
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
									<div>
										<h3>{elem.name}</h3>
									</div>
									<div className="weight">
										<h5>{elem.weight}g</h5>
									</div>
								</div>
								<div className="price">
									<div className="prices">
										<h4>${elem.price}</h4>
									</div>
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
export default CardMongo;
