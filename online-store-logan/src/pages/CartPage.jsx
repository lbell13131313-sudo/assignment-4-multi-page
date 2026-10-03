import CartItem from './components/CartItem'

function CartPage({products, deleteFromCart}) { // i will probably need to use cart instead of products
    
    // updates the total price of the shopping cart
    const cartTotal = () => {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(total);
    };
    
    return (
        <div>
            <h3>Shopping Cart</h3>
      
            {/* shopping cart display */}
            <div className="cart-display">
                {/* conditional rendering that displays a cart empty message when there are 0 items in the cart array */}
                {cart.length > 0 ? (
                    <>
                        {cart.map((c, index) => (
                            <CartItem
                                identification={index}
                                name={c.name}
                                price={c.price}
                                onDeleteFromCart={deleteFromCart}
                            />
                        ))}
            
                        <h3 className="total">
                            Total: {cartTotal()}
                        </h3>
                    </>
                ) : (
                    <a className="empty-cart">
                        Your cart is empty
                    </a>
                )}
            </div>
        </div>
    );
}

// Every component file must export the component
export default CartPage;