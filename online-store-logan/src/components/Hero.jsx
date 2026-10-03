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

            <div>
                <a></a>
                <a></a>
                <a></a>
            </div>
        </div>
    );
}

// Every component file must export the component
export default Hero;