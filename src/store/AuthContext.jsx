import React from "react";
const AuthContext = React.createContext({
	item: [],
	Amount: 0,
	dragger: "",
	getDragId: (ids) => {},
	addItem: (item) => {},
	removeItem: (id) => {},
	wishList: (id) => {},
	wishListItem: [],
});
export default AuthContext;
