import { Link } from 'react-router-dom';
import './footer.style.css';
import logo1 from '../../assets/logo1.png';
import facebookLogo from '../../assets/facebookLogo.png';
import twitterLogo from '../../assets/twitterLogo.png';
import youTubeLogo from '../../assets/youTubeLogo.png';
import instagramLogo from '../../assets/instagramLogo.png';
import workingHours from '../../assets/workingHours.png';
import phoneCall from '../../assets/phoneCall.png';
import mailUs from '../../assets/mailUs.png';
import location from '../../assets/location.png';

const Footer = () => {
  return (
    <div className="footerHolder">
      <div className="navigationContact">
        <div className="logoAndSocialNetworks">
          <img className="mainFooterLogo" src={logo1} alt="logo image" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At dolorem, sed sunt
            repudiandae ut, deserunt quia labore laborum amet vel reiciendis, omnis veniam vero
            officiis adipisci blanditiis. Vel, eius quia.
          </p>
          <div className="socialNetworkIcons">
            <img src={facebookLogo} alt="facebook logo" />
            <img src={twitterLogo} alt="twitter logo" />
            <img src={youTubeLogo} alt="you tube logo" />
            <img src={instagramLogo} alt="instagram logo" />
          </div>
        </div>
        <div className="catalog">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/blogPage">Blog</Link>
          <Link to="/aboutPage">About</Link>
          <Link to="/contactsPage">Contacts</Link>
        </div>
        <div className="phoneAndEmail">
          <div className="iconAndPhone">
            <img src={phoneCall} alt="phone icon" />
            <p>808-955-8441</p>
          </div>
          <div className="iconAndPhone">
            <img src={mailUs} alt="mailing icon" />
            <p>example@honolulu.com</p>
          </div>
          <div className="iconAndPhone">
            <img src={location} alt="location icon" />
            <p>Keeaumoku St, Honolulu, HI 96814</p>
          </div>
          <div className="iconAndPhone">
            <img src={workingHours} alt="clock icon" />
            <p>Daily 10:00 - 22:00h</p>
          </div>
        </div>
        <div className="subscribe">
          <p>Subscribe for news and updates</p>
          <div className="inputAndEmailIcon">
            <input type="email" placeholder="Email Adress" />
            <img src={mailUs} alt="mail icon" />
          </div>
          <p>
            Shopping various stuff at your local favorite store has been made possible by this
            dude.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
