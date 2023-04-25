import "./navbar.style.css";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo1.png";

const Navbar = () => {
    return(
        <div className="navbarHolder">
            <div className="navigation">
                <div className="logoAndStuff">
                   <Link to="/"><img src={logo1} className="logo" /></Link>
                    <Link to="/home"><p>Home</p></Link>
                    <p>Products</p>
                    <p>Blog</p>
                    <p>About</p>
                    <p>Contacts</p>
                </div>
                <div className="userIconAndCart">
                    <Link to="/profile"><img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" alt="user icon" className="userIcon" /></Link>
                    <Link to="/cart"><img src="https://pixy.org/src2/575/5755012.png" alt="shopping cart" className="shoppingcart" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;