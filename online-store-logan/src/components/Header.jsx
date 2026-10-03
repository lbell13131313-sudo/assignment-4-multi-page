import './Header.css' // allows me to use my custom css styles

function Header({store_name, length}) {
    return (
        <div className="header">
            <div className="store-name">
                {store_name}
            </div>
            <div className="menu-buttons">
                <a href="#home">Home</a>
                <a href="#products">Products</a>
                {/* functionality for the about page link will be added later */}
                <a>About</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="cart-container"> 
                <span className="cart-icon">🛒</span> 
                <a className="cart-num">
                    {length}
                </a>
            </div>
        </div>
    );
}

// Every component file must export the component
export default Header;