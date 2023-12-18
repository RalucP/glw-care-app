import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selectors";
import { selectCurrentUser } from "../../store/user/user.selector";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import { PaymentContainer, FormContainer } from "./PaymentForm.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal) * 100;
  const currentUser = useSelector(selectCurrentUser);
  const [ isProcessingPayment, setIsProcessingPayment ] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if(!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount })
    }).then(res => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest'
        }
      }
    });

    setIsProcessingPayment(false);

    if(paymentResult.error) alert(paymentResult.error.message);
    else if(paymentResult.paymentIntent.status === 'succeeded') alert('Payment successfull!');
  }

  return (
    <PaymentContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Card payment:</h2>
        <CardElement />
        <Button isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
      </FormContainer>
    </PaymentContainer>
  )
}

export default PaymentForm;