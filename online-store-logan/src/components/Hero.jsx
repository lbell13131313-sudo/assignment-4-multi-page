import './Hero.css' // allows me to use my custom css styles
import { Link } from 'react-router-dom'

// hero right now is just the image
function Hero({image}) {
    return (
        <div className="hero">
            <a className="hero-image">
                <img 
                    src={image}
                    alt="hero image" 
                    className="image"
                />
            </a>
            
            <div className="hero-overlay">
                <h2>Welcome to Logan's Tech Shop!</h2>
                <h5>We have every piece of tech you could ask for!</h5>
                <Link to={'/products'} className="link-button">
                    Shop Now
                </Link>
            </div>

            <h3>Why Shop With Us?</h3>

            <div className="info-row">
                <a className="info-card">
                    <h3>Quality Products</h3>
                    <p>Carefully curated selection of tech items</p>
                </a>
                <a className="info-card">
                    <h3>Fast Shipping</h3>
                    <p>Get your orders delivered quickly and safely</p>
                </a>
                <a className="info-card">
                    <h3>Great Support</h3>
                    <p>Our team is here to help with any questions</p>
                </a>
            </div>
        </div>
    );
}

// Every component file must export the component
export default Hero;