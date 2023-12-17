import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen, selectItemCount } from '../../store/cart/cart.selectors';
import { setIsCartOpen } from '../../store/cart/cart.reducer';

import ShoppingSvg from '../../assets/shopping-bag.svg'
import { CartIconContainer, ItemCount, ShoppingIcon } from './Cart.styles';

const Cart = () => {
  const itemCount = useSelector(selectItemCount);

  const isCartOpen = useSelector(selectIsCartOpen);

  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return(
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon src={ShoppingSvg} alt='shopping icon' />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  )
}

export default Cart;