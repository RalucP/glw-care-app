import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutItem from "../../components/checkoutItems/CheckoutItem";
import { CheckoutBody, CheckoutContainer, CheckoutHead, CheckoutTotal } from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

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
    </>
  )
}

export default Checkout;
