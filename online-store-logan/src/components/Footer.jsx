import './Footer.css' // allows me to use my custom css styles

// footer uses two main portions that have different text arranged in rows in them
function Footer({store_name, email, phone, address}) {
    return (
        <div className="footer">
            <div className="store_info">
                <a>{store_name}</a>
                <a>{email}</a>
                <a>{phone}</a>
                <a>{address}</a>
            </div>
            <div className="footer_buttons">
                {/* functionality for the about, privacy policy, and terms of service page links will be added later */}
                <a>About</a>
                <a href="#contact">Contact</a>
                <a>Privacy Policy</a>
                <a>Terms of Service</a>
            </div>
        </div>
    );
}

// Every component file must export the component
export default Footer;