import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

// const CARD_OPTIONS = {
// 	iconStyle: "solid",
// };

const PaymentForm = () => {
	const [success, setSuccess] = useState(false);
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: elements.getElement(CardElement),
		});

		if (!error) {
			try {
				const { id } = paymentMethod;
				const response = await axios.post(
					"https://localhost:4000/payment",
					{
						amount: 1000,
						id: id,
					}
				);
				if (response.data.success) {
					console.log("success payment");
					setSuccess(true);
				}
			} catch (error) {
				console.log("error", error);
			}
		} else {
			console.log(error.message);
		}
	};

	return (
		<>
			{!success ? (
				<form onSubmit={handleSubmit}>
					<fieldset className="FormGroup">
						<div className="FormRow">
							<CardElement />
						</div>
					</fieldset>
					<button>Pay</button>
				</form>
			) : (
				<div>
					<h2>You just bought a sweet spatula</h2>
				</div>
			)}
		</>
	);
};

export default PaymentForm;
