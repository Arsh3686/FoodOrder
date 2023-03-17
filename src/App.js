// import { Route } from "express";

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Mainbody from "./components/Mainbody";
import OrderPage from "./components/OrderPage";
import StripeContainer from "./components/Stripe/StripeContainer";
import WishList from "./components/WishList/WishList";
import ContextProvider from "./store/ContextProvider";
// export const AuthContext = createContext();
function App() {
	const [state, setState] = useState(-1);
	const getData = (props) => {
		setState(props);
		// console.log(props);
	};
	return (
		<ContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Mainbody takeData={getData} />} />
					<Route path="/order" element={<StripeContainer />} />
					<Route path="/wishlist" element={<WishList />} />
				</Routes>
			</BrowserRouter>
		</ContextProvider>
	);
}

export default App;
