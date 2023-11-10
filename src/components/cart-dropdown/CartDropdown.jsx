import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { CartDropdownContainer, CartItemsContainer, EmptyMessage } from "./CartDropdown.styles";

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
  }

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {
          cartItems.length ? cartItems.map(item => (
            <CartItem key={item.id} cartItem={item} />
          )) : <EmptyMessage>Your cart is empty</EmptyMessage>
        }
      </CartItemsContainer>
      <Button onClick={goToCheckout}>Go to checkout</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown;