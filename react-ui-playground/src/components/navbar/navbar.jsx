import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return(
        <nav className="card btn navbar">
            <Link to="/">LOGO</Link>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}
export default Navbar