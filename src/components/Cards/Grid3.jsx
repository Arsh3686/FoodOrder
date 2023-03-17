import { Link } from "react-router-dom";
import Grid3lower from "../Grid3lower";
import "../style/Grid3.css";
import Grid3middle from "./Grid3middle";
import AuthContext from "../../store/AuthContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
const Grid3 = (prop) => {
	const [cartPrice, setCartPrice] = useState(0);

	const ctx = useContext(AuthContext);

	const remHandler = (id) => {
		ctx.removeItem(id);
	};
	const addHandler = (item) => {
		ctx.addItem({ ...item, Amount: 1 });
	};
	return (
		<div className="Grid3">
			<div className="upperpart">
				<div className="text">
					<div>
						<Link to="./order" className="cart">
							Cart
							<span>
								{ctx.item !== undefined && ctx.item.length}
							</span>
						</Link>
					</div>
					<div>
						<Link to="/wishlist">
							WishList {ctx.wishListItem.length}
						</Link>
					</div>
				</div>
			</div>
			<div className="middlepart">
				{ctx.item !== undefined &&
					ctx.item.map((e, index) => {
						return (
							<Grid3middle
								key={index}
								id={e.id}
								name={e.name}
								price={e.price}
								weight={e.weight}
								rating={e.rating}
								src={e.img}
								Amount={e.Amount}
								onAdd={addHandler.bind(null, e)}
								onRem={remHandler.bind(null, e.id)}
							/>
						);
					})}
			</div>
			<div className="lowerpart">
				<Grid3lower
					checkLogin={prop.checkLogin}
					is={prop.is}
					price={Number.parseFloat(cartPrice).toFixed(2)}
				/>
			</div>
		</div>
	);
};

export default Grid3;
