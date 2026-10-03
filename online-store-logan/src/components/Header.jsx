import './Header.css' // allows me to use my custom css styles
import { Link } from 'react-router-dom'

function Header({store_name, length}) {
    return (
        <div className="header">
            <div className="store-name">
                {store_name}
            </div>
            
            <div className="menu-buttons">
                <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <a>Home</a>
                </Link>

                <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <a>Products</a>
                </Link>

                {/* functionality for the about page link will be added later */}
                <a>About</a>
                <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
            </div>

            <Link to={'/cart'} className="cart-container"> 
                <span className="cart-icon">🛒</span> 
                <a className="cart-num">
                    {length}
                </a>
            </Link>
        </div>
    );
}

// Every component file must export the component
export default Header;