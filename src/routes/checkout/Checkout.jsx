import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-items/CheckoutItem";
import PaymentForm from "../../components/payment-form/PaymentForm";
import { CheckoutBody, CheckoutContainer, CheckoutHead, CheckoutTotal } from "./Checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <>
      <CheckoutContainer>
        <CheckoutHead>
          <tr>
            <td>Product image</td>
            <td>Product name</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Remove</td>
          </tr>
        </CheckoutHead>
        <CheckoutBody>
          {
            cartItems && cartItems.map(item => (
              <CheckoutItem
                key={item.id}
                item={item}
              />
            ))
          }
          <tr>
            <CheckoutTotal colSpan={5}>Total: {cartTotal} SEK</CheckoutTotal>
          </tr>
        </CheckoutBody>
      </CheckoutContainer>
      <PaymentForm />
    </>
  )
}

export default Checkout;