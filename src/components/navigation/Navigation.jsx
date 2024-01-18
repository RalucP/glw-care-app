import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selectors";
import logo  from '../../assets/glw-logo.svg'

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./Navigation.styles";

import Cart from '../Cart/Cart';
import CartDropdown from "../cart-dropdown/CartDropdown";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return(
    <NavigationContainer>
      <Link to='/'>
        <LogoContainer src={logo} alt="GLW Care" />
      </Link>
      <NavLinks>
        <NavLink to='/shop'>Shop</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        {
          currentUser ? ( 
            <NavLink as={'span'} onClick={signOutUser}>Sign Out</NavLink> 
          ) : (
            <NavLink to='/authentication'>Sign in</NavLink>
          )
        }
        <Cart />
      </NavLinks>
      { isCartOpen && <CartDropdown /> }
    </NavigationContainer>
  )
}

export default Navigation;