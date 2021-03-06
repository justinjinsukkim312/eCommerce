import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51GrXw6Fsy3MFWZPgoTjPVXqRnJUtFJD24UU2lYXc5P3FGkZQvdLNcSopmFapOoXfbNkgWjahjmrBNMjdoC9ZU8QU00zyhtuuc1';

	const onToken = (token) => {
		alert('Payment Successful');
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
