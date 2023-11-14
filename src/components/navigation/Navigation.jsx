import { useContext } from "react";
import { Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase";
import logo  from '../../assets/glw-logo.svg'

import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./Navigation.styles";

import Cart from '../Cart/Cart';
import CartDropdown from "../cart-dropdown/CartDropdown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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