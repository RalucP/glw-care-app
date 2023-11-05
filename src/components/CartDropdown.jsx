import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Button from "./Button";
import CartItem from "./CartItem";

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items-container">
        {
          cartItems && cartItems.map(item => (
            <CartItem key={item.id} cartItem={item} />
          ))
        }
      </div>
      <Button>Go to checkout</Button>
    </div>
  )
}

export default CartDropdown;