// import React from "react";
// import { useReducer } from "react";

// export const AuthStore = React.createContext({
// 	item: [],
// 	price: 0,
// 	Amount: 0,
// 	addItem: () => {},
// 	removeItem: () => {},
// });
// const ContextReducer = (state, action) => {
// 	if (action.type === "ADD_ITEM") {
// 		const indexFinder = state.item.findIndex((e) => {
// 			return e.id === action.item.id;
// 		});
// 		const indexAtFoundElement = state.item[indexFinder];

// 		let updatedItemsArray;
// 		if (indexAtFoundElement !== undefined) {
// 			const updatedItem = {
// 				...indexAtFoundElement,
// 				Amount: indexAtFoundElement.Amount + 1,
// 			};
// 			updatedItemsArray = [...state.item];
// 			updatedItemsArray[indexFinder] = updatedItem;
// 		} else {
// 			updatedItemsArray = state.item.concat(action.item);
// 		}

// 		const updatedCartAmmount = state.numberOfCartItems + action.item.Amount;
// 		const updatedCartPrice = state.price + action.item.price;
// 		// const updated
// 		return {
// 			item: updatedItemsArray,
// 			numberOfCartItems: updatedCartAmmount,
// 			price: updatedCartPrice,
// 		};
// 	}
// 	if (action.type === "REMOVE_ITEM") {
// 		console.log(action.id);
// 		console.log(state.item);
// 		const tobeActArray = state.item[action.id - 1];
// 		let updatedItemsArray;
// 		if (tobeActArray !== undefined && tobeActArray.Amount > 1) {
// 			const updatedItem = {
// 				...tobeActArray,
// 				Amount: tobeActArray.Amount - 1,
// 			};
// 			updatedItemsArray = [...state.item];
// 			updatedItemsArray[action.id - 1] = updatedItem;
// 			console.log(updatedItemsArray);
// 		} else {
// 			updatedItemsArray = state.item.filter((e) => {
// 				return action.id !== e.id;
// 			});
// 			console.log(updatedItemsArray);
// 		}
// 		// state.item[action.id] = ;
// 		// console.log();
// 		// console.log();

// 		return {
// 			item: updatedItemsArray,
// 			// numberOfCartItems: updatedCartAmmount,
// 			// price: updatedCartPrice,
// 		};
// 	}
// 	return {
// 		item: [],
// 		numberOfCartItems: 0,
// 		price: 0,
// 	};
// };
// const Compo = (props) => {
// 	const [cartState, dispatchAction] = useReducer(ContextReducer, {
// 		item: [],
// 		numberOfCartItems: 0,
// 		price: 0,
// 	});

// 	const addIteminCart = (item) => {
// 		console.log(item);
// 		dispatchAction({ type: "ADD_ITEM", item: item });
// 	};
// 	const removeItemfromCart = (id) => {
// 		dispatchAction({ type: "REMOVE_ITEM", id: id });
// 	};
// 	return (
// 		<AuthStore.Provider
// 			value={{
// 				item: cartState.item,
// 				Amount: cartState.numberOfCartItems,
// 				addItem: addIteminCart,
// 				removeItem: removeItemfromCart,
// 				price: cartState.price,
// 			}}>
// 			{props.children}
// 		</AuthStore.Provider>
// 	);
// };

// export default Compo;
