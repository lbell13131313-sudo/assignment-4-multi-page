import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ProductPage from './pages/ProductPage'

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


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
    },
    {
      id: 4,
      name: "iPhone Case",
      price: 29.49,
      image: "https://placehold.co/300x200",
      description: "Phone case for iPhone"
    },
    {
      id: 5,
      name: "HYTE Y70 Touch Infinite Tower",
      price: 399.99,
      image: "https://placehold.co/300x200",
      description: "PC case with a touch screen function"
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

  return (
    <BrowserRouter className="app">
      {/* location that the home link will send you to*/}
      <a id="home">
        <Header
          store_name="Logan's Tech Shop"
          length={cart.length}
        />
      </a>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products" element={<ProductPage products={products} addToCart={addToCart}/>}/>
        <Route path="/cart" element={<CartPage cart={cart} deleteFromCart={deleteFromCart}/>}/>
      </Routes>
      
      {/* location that the contact link will send you to*/}
      <a id="contact">
        <Footer
          store_name="Logan's Tech Shop"
          email="logantechshop@gmail.com"
          phone="(123) 456-7890"
          address="123 Main Street, Nowhereville, NJ 12345"
        />
      </a>
    </BrowserRouter>
  )
}

export default App;