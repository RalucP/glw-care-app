import { Link } from "react-router-dom";
import logo  from '../assets/glw-logo.svg'

const Navigation = () => {
  return(
    <div className="nav-container">
      <Link className="nav-logo" to='/'>
        <img src={logo} alt="GLW Care" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to='/shop'>Shop</Link>
        <Link className="nav-link" to='/contact'>Contact</Link>
        <Link className="nav-link" to='/authentication'>Sign in</Link>
      </div>
    </div>
  )
}

export default Navigation;