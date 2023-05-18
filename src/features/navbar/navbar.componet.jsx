import './navbar.style.css';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/logo1.png';
import cartLogo from '../../assets/cartLogo.png';
import userIconLogo from '../../assets/userIconLogo.png';

const Navbar = () => {
  return (
    <div className="navbarHolder">
      <div className="navigation">
        <div className="logoAndStuff">
          <Link to="/">
            <img src={logo1} className="logo" />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/blogPage">Blog</Link>
          <Link to="/aboutPage">About</Link>
          <Link to="/contactsPage">Contacts</Link>
        </div>
        <div className="userIconAndCart">
          <Link to="/profile">
            <img src={userIconLogo} alt="user icon" className="userIcon" />
          </Link>
          <Link to="/cart">
            <img src={cartLogo} alt="shopping cart" className="shoppingcart" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
