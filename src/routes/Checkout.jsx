import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutItem from "../components/CheckoutItem";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <>
      <table className="checkout-container">
        <thead className="checkout-header">
          <tr>
            <td>Product image</td>
            <td>Product name</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody className="checkout-body">
          {
            cartItems && cartItems.map(item => (
              <CheckoutItem
                key={item.id}
                item={item}
              />
            ))
          }
          <tr>
            <td colSpan={5} className="checkout-total">Total: {cartTotal} SEK</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Checkout;
