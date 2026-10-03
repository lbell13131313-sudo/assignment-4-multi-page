import './App.css'
import ProductCard from './components/ProductCard' // allows us to use the Product Card function from ProductCard.jsx
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import CartItem from './components/CartItem'
import { useState } from 'react'


// please note that my page is in dark mode
function App() {
  const products = [
    { 
      id: 1, 
      name: "Xbox Series X|S Controller", 
      price: 53.99, 
      image: "https://placehold.co/300x200",
      description: "Game controller usable for Xbox Series X|S, PC, and Phone"
    },
    { 
      id: 2, 
      name: "80 Minute CD-Rs", 
      price: 7.99, 
      image: "https://placehold.co/300x200",
      description: "10 pack of writeable CD-R discs"
    },
    { 
      id: 3, 
      name: "Vinyl Player", 
      price: 249.00, 
      image: "https://placehold.co/300x200",
      description: "Plays both fullsize vinyls and mini vinyls"
    }
  ];

  const [cart, setAddCart] = useState([]);

  // allows the user to add items to a cart
  const addToCart = (identification) => {
    const productToAdd = products.find(p => p.id == identification);
    // I was overcomplicating this so much, but now I have it so it properly adds the items to the cart
    if (productToAdd) {
      setAddCart([...cart, productToAdd]);
    }
    //console.log(productToAdd);
  };

  // allows the user to remove items from the cart from the click of a button
  const deleteFromCart = (identification) => {
    setAddCart(cart.filter((_, index) => index !== identification));
  };

  // updates the total price of the shopping cart
  const cartTotal = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(total);
  };

  return (
    <div className="app">
      {/* location that the home link will send you to*/}
      <a id="home">
        <Header
          store_name="Logan's Tech Shop"
          length={cart.length}
        />
      </a>

      {/* I had to change the link because my page is only 1124px wide for some reason I have no idea why */}
      <Hero
        image="src\assets\techProducts.png"
      />

      {/* location that the products link will send you to*/}
      <h3 id="products">Featured Products</h3>

      {/* allows the product cards to be in a row centered on the screen */}
      <div className="product-row">
        {/* supplies the props to the ProductCard function in ProductCard.jsx */}
        {/* much more condensed and reusable now than it was before */}
        {products.map(p => (
          <ProductCard
            identification={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
            description={p.description}
            onAddToCart={addToCart}
          />
        )) }
      </div>

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
      
      {/* location that the contact link will send you to*/}
      <a id="contact">
        <Footer
          store_name="Logan's Tech Shop"
          email="logantechshop@gmail.com"
          phone="(123) 456-7890"
          address="123 Main Street, Nowhereville, NJ 12345"
        />
      </a>
    </div>
  )
}

export default App;