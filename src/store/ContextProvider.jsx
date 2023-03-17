import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";
import Information from "../components/Info";

import AuthContext from "./AuthContext";

const defaultCartState = {
	item: [],
	Amount: 0,
	dragger: "",
	wishListItem: [],
};

const cartReducer = (state, action) => {
	const stateCartState = {
		item: state.item,
		Amount: state.Amount,
		dragger: state.dragger,
		wishListItem: state.wishListItem,
	};
	if (action.type === "ADD_ITEM") {
		// console.log("id", action.item.id);

		const index = state.item.findIndex((e) => {
			return e.id === action.item.id;
		});
		// console.log("index", index);

		const ele = state.item[index];
		// console.log("ele", ele);
		const index2 = Information.findIndex((e) => {
			return e.id === action.item.id;
		});
		Information[index2].addIcon = "/images/checked.png";

		let updatedItems;
		if (ele) {
			let updatedItem = {
				...ele,
				Amount: ele.Amount + 1,
			};
			updatedItems = [...state.item];
			updatedItems[index] = updatedItem;
			// console.log("updated", updatedItems[index]);
			// console.log("in if block");
		} else {
			// console.log("in else block");

			updatedItems = state.item.concat(action.item);
			// console.log("state.item", updatedItems);
		}
		const updatedTotalAmmount =
			state.Amount + action.item.Amount * action.item.price;
		// console.log(updatedTotalAmmount);

		return {
			...stateCartState,
			item: updatedItems,
			Amount: updatedTotalAmmount,
		};
	}
	if (action.type === "REMOVE_ITEM") {
		console.log("id", action.id);
		console.log("state.item ==>", state.item);
		const index = state.item.findIndex((e) => {
			return e.id === action.id;
		});
		// console.log("is item present", index);
		const ele = state.item[index];
		let updatedItems;
		// console.log("element Amount", ele);
		if (ele.Amount === 1) {
			const index2 = Information.findIndex((e) => {
				return e.id === action.id;
			});
			Information[index2].addIcon = "/images/add.png";
			// Information[index2].heart = "/images/heart.png";
			updatedItems = state.item.filter((e) => {
				return e.id !== action.id;
			});
		} else {
			const updatedItem = {
				...ele,
				Amount: ele.Amount - 1,
			};
			updatedItems = [...state.item];
			updatedItems[index] = updatedItem;
		}
		const updatedTotalAmmount = Math.abs(state.Amount - ele.price);
		return {
			...stateCartState,
			item: updatedItems,
			Amount: updatedTotalAmmount,
		};
	}
	if (action.type === "DRAGGED_ITEM") {
		// console.log("acccc", action.id);
		return {
			...stateCartState,
			item: state.item,
			dragger: action.id,
			Amount: state.Amount,
		};
	}
	if (action.type === "WISHLIST") {
		let data = [...state.wishListItem];
		const isPresent = data.find((e) => {
			return e.id === action.item.id;
		});

		const index2 = Information.findIndex((e) => {
			return e.id === action.item.id;
		});
		// Information[index2].addIcon = "/images/checked.png";
		if (isPresent) {
			data = data.filter((e) => {
				return e.id !== action.item.id;
			});
			Information[index2].heart = "/images/heart.png";
		} else {
			Information[index2].heart = "/images/redheart.png";
			data.push(action.item);
		}

		console.log("state", state);
		console.log("data", data);
		return { ...stateCartState, wishListItem: data };
	}
	return defaultCartState;
};
const ContextProvider = (props) => {
	const [cartState, dispatchAction] = useReducer(
		cartReducer,
		defaultCartState
	);
	const addItemToCart = (item) => {
		// console.log(cartState);
		console.log("added", item);
		dispatchAction({ type: "ADD_ITEM", item: item });
	};
	const removeItemFromCart = (id) => {
		dispatchAction({ type: "REMOVE_ITEM", id: id });
	};
	const draggedItem = (ids) => {
		dispatchAction({ type: "DRAGGED_ITEM", id: ids });
	};
	const handleWishList = (id) => {
		dispatchAction({ type: "WISHLIST", item: id });
	};

	const HelperContext = {
		item: cartState.item,
		Amount: cartState.Amount,
		dragger: cartState.dragger,
		addItem: addItemToCart,
		removeItem: removeItemFromCart,
		getDragId: draggedItem,
		wishList: handleWishList,
		wishListItem: cartState.wishListItem,
	};
	return (
		<AuthContext.Provider value={HelperContext}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default ContextProvider;
