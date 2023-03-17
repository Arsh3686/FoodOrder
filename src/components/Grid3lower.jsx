import { NavLink } from "react-router-dom";

import "./style/Grid3lower.css";
import AuthContext from "../store/AuthContext";
import { useState, useContext } from "react";

const Grid3lower = (prop) => {
	console.log("prop.price", prop.price);

	const ctx = useContext(AuthContext);
	// const [signedIn, setSignedIn] = useState(
	// 	localStorage.getItem("email") !== null &&
	// 		localStorage.getItem("displayName") !== null &&
	// 		localStorage.getItem("photoURL") !== null
	// 		? true
	// 		: false
	// );
	// const [Image, setImage] = useState(
	// 	localStorage.getItem("photoURL") !== null
	// 		? localStorage.getItem("photoURL")
	// 		: "./images/user(2).png"
	// );
	// const [name, setName] = useState(
	// 	localStorage.getItem("displayName") !== null
	// 		? localStorage.getItem("displayName")
	// 		: "Login"
	// );
	// const handleLogin = () => {
	// 	signInWithPopup(auth, provider)
	// 		.then((res) => {
	// 			localStorage.setItem("email", res.user.email);
	// 			localStorage.setItem("displayName", res.user.displayName);
	// 			setName(res.user.displayName);
	// 			localStorage.setItem("photoURL", res.user.photoURL);
	// 			setImage(res.user.photoURL);
	// 			setSignedIn(true);
	// 			prop.checkLogin(true);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// };

	return (
		<>
			<div className="draganddrop">
				<button>
					<NavLink activeClassName="active" to="/">
						<h4>Drag and drop</h4>
					</NavLink>
				</button>
			</div>
			<div className="Totals">
				<h3>Total</h3>
				<h3>
					$
					{ctx.Amount !== undefined
						? Math.abs(ctx.Amount).toFixed(2)
						: 0.0}
				</h3>
			</div>
			<div className="Checkout">
				<button>
					<NavLink
						activeClassName="active"
						className="link"
						to={ctx.Amount !== undefined && "/order"}>
						Checkout
					</NavLink>
				</button>
			</div>
		</>
	);
};

export default Grid3lower;
