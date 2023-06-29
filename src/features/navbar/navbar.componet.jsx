import './navbar.style.css';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets';
import { CartLogo } from '../../assets';
import { UserIcon } from '../../assets';

const Navbar = ({ selectedProducts }) => {
  return (
    <div className="navbarHolder">
      <div className="navigation">
        <div className="logoAndStuff">
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/blogPage">Blog</Link>
          <Link to="/aboutPage">About</Link>
          <Link to="/contactsPage">Contacts</Link>
        </div>
        <div className="userIconAndCart">
          <Link to="/profilePage">
            <UserIcon />
          </Link>
          <Link className="itemsNumber" to="/cartPage">
            <CartLogo />
            <span>{selectedProducts.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
