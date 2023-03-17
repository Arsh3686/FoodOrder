import React, { useContext } from "react";
import AuthContext from "../../store/AuthContext";

const WishList = () => {
	const { wishListItem } = useContext(AuthContext);
	return (
		<div>
			{wishListItem.map((e) => {
				return (
					<div key={e.id}>
						<li>{e.name}</li>
					</div>
				);
			})}
		</div>
	);
};

export default WishList;
