import './Hero.css' // allows me to use my custom css styles

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
                <a href="#products" className="link-button">
                    Shop Now
                </a>
            </div>
        </div>
    );
}

// Every component file must export the component
export default Hero;