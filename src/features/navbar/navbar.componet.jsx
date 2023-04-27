import "./navbar.style.css";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo1.png";
import cartLogo from "../../assets/cartLogo.png";
import userIconLogo from "../../assets/userIconLogo.png";

const Navbar = () => {
    return(
        <div className="navbarHolder">
            <div className="navigation">
                <div className="logoAndStuff">
                   <Link to="/product_shop"><img src={logo1} className="logo" /></Link>
                    <Link to="/product_shop">Home</Link>
                    <Link to="product_shop/products">Products</Link>
                    <Link to="product_shop/blog">Blog</Link>
                    <Link to="product_shop/about">About</Link>
                    <Link to="product_shop/contacts">Contacts</Link>
                </div>
                <div className="userIconAndCart">
                    <Link to="product_shop/profile"><img src={userIconLogo} alt="user icon" className="userIcon" /></Link>
                    <Link to="product_shop/cart"><img src={cartLogo} alt="shopping cart" className="shoppingcart" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;