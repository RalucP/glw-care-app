import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ClickAwayListener from "react-click-away-listener";
import { selectCartItems } from "../../store/cart/cart.selectors";
import { setIsCartOpen } from "../../store/cart/cart.action"

import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { CartDropdownContainer, CartItemsContainer, EmptyMessage } from "./CartDropdown.styles";

const CartDropdown = () => {

  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const closeCheckoutDropdown = () => dispatch(setIsCartOpen(false));

  const goToCheckout = () => {
    navigate('/checkout');
    closeCheckoutDropdown();
  }

  return (
    <ClickAwayListener onClickAway={closeCheckoutDropdown}>
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
    </ClickAwayListener>    
  )
}

export default CartDropdown;