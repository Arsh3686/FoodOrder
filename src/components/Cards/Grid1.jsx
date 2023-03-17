import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth, provider } from "../Firebase";
import "../style/Grid1.css";
const Grid1 = (prop) => {
	const [signedIn, setSignedIn] = useState(
		localStorage.getItem("email") !== null &&
			localStorage.getItem("displayName") !== null &&
			localStorage.getItem("photoURL") !== null
			? true
			: false
	);
	const [Image, setImage] = useState(
		localStorage.getItem("photoURL") !== null
			? localStorage.getItem("photoURL")
			: "./images/user(2).png"
	);
	const [name, setName] = useState(
		localStorage.getItem("displayName") !== null
			? localStorage.getItem("displayName")
			: "Login"
	);
	// if (localStorage.getItem("email") !== null) {
	// 	setSignedIn(true);
	// }
	const handleLogin = () => {
		signInWithPopup(auth, provider)
			.then((res) => {
				localStorage.setItem("email", res.user.email);
				localStorage.setItem("displayName", res.user.displayName);
				setName(res.user.displayName);
				localStorage.setItem("photoURL", res.user.photoURL);
				setImage(res.user.photoURL);
				setSignedIn(true);
			})
			.catch((err) => {
				console.error(err);
			});
	};
	// useEffect(() => {
	// 	if (localStorage.length > 1) {
	// 		setSignedIn(!signedIn);
	// 	}
	// }, []);
	return (
		<>
			<div className="Grid1">
				<ul>
					<li>
						<div className="sidebar">
							<img
								style={{ borderRadius: "50%" }}
								src={Image}
								alt="//"
							/>
							<h1 onClick={handleLogin}>{name}</h1>
						</div>
					</li>
					<li>
						<Link to="/">
							<div className="sidebar">
								<img src="./images/menu.png" alt="" />
								<h1>Restraunt</h1>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/orders">
							<div className="sidebar">
								<img src="./images/menu.png" alt="" />
								<h1>Orders</h1>
							</div>
						</Link>
					</li>
					{signedIn && (
						<li>
							<div className="sidebar">
								<img
									style={{
										backgroundColor: "transparent",

										height: "40%",
									}}
									src="./images/logout.png"
									alt=""
								/>
								<h1 onClick={handleLogin}>Sign-Out</h1>
							</div>
						</li>
					)}
				</ul>
			</div>
		</>
	);
};

export default Grid1;
