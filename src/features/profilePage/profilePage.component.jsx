import Heading from '../../common/heading/heading.component';
import './profilePage.style.css';

const ProfilePage = () => {
  return (
    <div className="profilePageHolder">
      <div className="shortPersonalInfo">
        <img
          src="https://i.dailymail.co.uk/1s/2022/08/26/17/61760545-0-image-a-325_1661531382104.jpg"
          alt=""
        />
        <div className="nameAndDateJoinedUnderProfilePhoto">
          <h2>Spomenko Dukic</h2>
          <p>Joined June 6, 2018.</p>
        </div>
      </div>
      <div className="longPersonalInfo">
        <Heading headingText="Personal info" />
        <hr />
        <form>
          <h2>Contact</h2>
          <div className="namePhoneBirthInfo">
            <div className="those4AreSame">
              <label htmlFor="firstName">First Name</label>
              <input type="text" placeholder="First Name..." />
            </div>
            <div className="those4AreSame">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" placeholder="Last Name..." />
            </div>
            <div className="those4AreSame">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="number" placeholder="Phone Number..." />
            </div>
            <div className="those4AreSame">
              <label htmlFor="dateOfBirth">Date Of Birth</label>
              <input type="date" placeholder="Date Of birth..." />
            </div>
          </div>
          <div className="addressInfo">
            <h2>Address</h2>
            <div className="countryInfo">
              <label htmlFor="country">Country</label>
              <input type="text" placeholder="Your Country..." />
            </div>
            <div className="cityAndPostCode">
              <div className="cityInfo">
                <label htmlFor="city">City</label>
                <input type="text" placeholder="Your City..." />
              </div>
              <div className="postalCodeInfo">
                <label htmlFor="postCode">Postal Code</label>
                <input type="text" placeholder="Your Postal Code..." />
              </div>
            </div>
            <div className="streetInfo">
              <label htmlFor="street">Street</label>
              <input type="text" placeholder="Your Street..." />
            </div>
            <div className="BuildingEntranceFloorApartment">
              <div className="those4AreAdditionalInfoOnBuildingEntrance">
                <label htmlFor="building">Building</label>
                <input type="text" placeholder="Building..." />
              </div>
              <div className="those4AreAdditionalInfoOnBuildingEntrance">
                <label htmlFor="entrance">Entrance</label>
                <input type="text" placeholder="Entrance..." />
              </div>
              <div className="those4AreAdditionalInfoOnBuildingEntrance">
                <label htmlFor="floor">Floor</label>
                <input type="text" placeholder="Floor..." />
              </div>
              <div className="those4AreAdditionalInfoOnBuildingEntrance">
                <label htmlFor="apartment">Apartment</label>
                <input type="text" placeholder="Apartment..." />
              </div>
            </div>
            <div className="commentInfo">
              <label htmlFor="comment">Comment</label>
              <textarea
                name="subject"
                placeholder="Additional information: phone number or doorphone code..."
                id=""
                cols="40"
                rows="10"
              ></textarea>
            </div>
          </div>
        </form>
        <hr className="bottomBreakLine" />
        <button className="blueButton">Submit</button>
      </div>
    </div>
  );
};

export default ProfilePage;
