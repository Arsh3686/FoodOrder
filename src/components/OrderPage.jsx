import "./style/Card.css";

import AuthContext from "../store/AuthContext";
import { useContext } from "react";
// import { Container } from "react-bootstrap";

const OrderPage = () => {
	const ctx = useContext(AuthContext);
	console.log(ctx.item);

	// console.log(a);
	return (
		<div className="Container">
			{ctx.item !== undefined &&
				ctx.item.map((elem) => {
					return (
						<div className="flex" key={elem.id}>
							<div className="card_divide1">
								<div className="rating">
									<h5>⭐</h5>
									<h4 className="h4">{elem.rating}</h4>
								</div>
								<div className="heart">
									<h4>
										<img
											alt={elem.name}
											// onClick={() => liked(elem.id)}
											id={`image${elem.id}`}
											src="/images/heart.png"
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
											<h5>{elem.weight}</h5>
										</div>
									</div>
									<div className="price">
										<div className="prices">
											<h4>{elem.price}</h4>
										</div>
										<div className="button">
											<img
												// onClick={() => added(elem.id)}
												className="add"
												id={`add${elem.id}`}
												src="/images/add.png"
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default OrderPage;
