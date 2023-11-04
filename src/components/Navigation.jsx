import { useContext } from "react";
import { Link } from "react-router-dom";
import { signOutUser } from "../utils/firebase";
import logo  from '../assets/glw-logo.svg'
import { UserContext } from "../context/UserContext";
import Cart from './Cart'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return(
    <div className="nav-container">
      <Link className="nav-logo" to='/'>
        <img src={logo} alt="GLW Care" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to='/shop'>Shop</Link>
        <Link className="nav-link" to='/contact'>Contact</Link>
        {
          currentUser ? ( 
            <span className="nav-link" onClick={signOutUser}>Sign Out</span> 
          ) : (
            <Link className="nav-link" to='/authentication'>Sign in</Link>
          )
        }
        <Cart />
      </div>
    </div>
  )
}

export default Navigation;