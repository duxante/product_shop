import { Link } from 'react-router-dom';
import { Logo } from '../../assets';
import { CartLogo } from '../../assets';
import { UserIcon } from '../../assets';
import './navbar.style.css';

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
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
        <div className="userIconAndCart">
          <Link to="/profile">
            <UserIcon />
          </Link>
          <Link className="itemsNumber" to="/cart">
            <CartLogo />
            <span>{selectedProducts.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
