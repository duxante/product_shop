import Heading from '../../common/heading/heading.component';
import './contactsPage.style.css';
import phoneCall from '../../assets/phoneCall.png';
import mailUs from '../../assets/mailUs.png';
import location from '../../assets/location.png';
import workingHours from '../../assets/workingHours.png';

const ContactsPage = () => {
  return (
    <>
      <Heading headingText="Contacts" />
      <div className="contactsPageHolder">
        <img
          className="mainImage"
          src="https://cdn.mos.cms.futurecdn.net/MsG53PJxNQu3N9gXxLpG43.jpg"
          alt=""
        />
        <div className="storeAndFeedbackHolder">
          <div className="store">
            <h3>Store</h3>
            <div className="imagesAndData">
              <img src={phoneCall} alt="" />
              <p>808-955-8441</p>
            </div>
            <div className="imagesAndData">
              <img src={mailUs} alt="" />
              <p>example@honolulu.com</p>
            </div>
            <div className="imagesAndData">
              <img src={location} alt="" />
              <p>Keeaumoku St, Honolulu, HI 96814</p>
            </div>
            <div className="imagesAndData">
              <img src={workingHours} alt="" />
              <p>Daily 10:00 - 22:00h</p>
            </div>
          </div>
          <div className="feedback">
            <h3>Feedback</h3>
            <div className="departmentMails">
              <h3>COOPERATION</h3>
              <p>cooperation@example.com</p>
            </div>
            <div className="departmentMails">
              <h3>PARTNERS</h3>
              <p>partner@example.com</p>
            </div>
            <div className="departmentMails">
              <h3>PRESS</h3>
              <p>press@example.com</p>
            </div>
          </div>
        </div>
        <div className="contactUsFormHolder">
          <h2>Contact Us</h2>
          <form className="justForm">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Your Name..." />
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Your Email Address..." />
            <label htmlFor="topic">Topic</label>
            <select name="Topic" id="">
              <option value="Choose Option">Choose Option...</option>
              <option value="E-Commerce Support">E-Commerce Support</option>
              <option value="Online Orders">Online Orders</option>
              <option value="Sales&Marketing">Sales & Marketing</option>
              <option value="Cult of E-Commerce">Cult of E-Commerce</option>
            </select>
            <label htmlFor="message">Message</label>
            <textarea
              name="subject"
              placeholder="Write Message..."
              id=""
              cols="40"
              rows="10"
            ></textarea>
          </form>
          <button className="blueButton">Submit</button>
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
