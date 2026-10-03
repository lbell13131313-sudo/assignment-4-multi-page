import './CartItem.css' // allows me to use my custom css styles

// each card has the same format to help with a clean look
function CartItem({identification, name, price, onDeleteFromCart}) {
    
    // formats the price to USD format including 2 decimal places and the $ in front
    const formattedCurrency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);

    return (
        <div className="item-box">
            <a className="info">
                <h3>{name}</h3>
                <p>{formattedCurrency}</p>
            </a>
            <button className="delete-button" onClick = {() => onDeleteFromCart(identification)}>
                Remove
            </button>
        </div>
    );
}

// Every component file must export the component
export default CartItem;