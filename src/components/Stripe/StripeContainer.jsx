import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const StripeContainer = () => {
	const API_KEY =
		"pk_test_51M1mDmSEZdqMRMkHOkvySclKLUWKUuDZFCYVo711e1s9zEy2G0rNQRsnHgD5l9xXzZ4oXSEQjoycrUxf1LW01VeB00zg4NwBF8";
	const StripePromise = loadStripe(API_KEY);
	return (
		<Elements stripe={StripePromise}>
			<PaymentForm />
		</Elements>
	);
};

export default StripeContainer;
