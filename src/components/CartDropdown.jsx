import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Button from "./button/Button";
import CartItem from "./CartItem";

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items-container">
        {
          cartItems && cartItems.map(item => (
            <CartItem key={item.id} cartItem={item} />
          ))
        }
      </div>
      <Button onClick={goToCheckout}>Go to checkout</Button>
    </div>
  )
}

export default CartDropdown;