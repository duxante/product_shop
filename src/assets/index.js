import allYouNeedToKnowAboutMac from './allYouNeedToKnowAboutMac.jpeg';
import mobilePhones from './mobilePhones.jpeg';
import camera from './camera.jpg';
import ps5 from './ps5.jpg';
import garminInstinct from './garminInstinct.jpg';
import razer from './razer.jpg';
import logo1 from './logo1.png';

const MacImage = () => {
  return <img src={allYouNeedToKnowAboutMac} alt="Mac" />;
};

const MobileImage = () => {
  return <img src={mobilePhones} alt="Mac" />;
};

const CameraImage = () => {
  return <img src={camera} alt="Mac" />;
};

const PlayStationImage = () => {
  return <img src={ps5} alt="Mac" />;
};

const GarminImage = () => {
  return <img src={garminInstinct} alt="Mac" />;
};

const RazerImage = () => {
  return <img src={razer} alt="Mac" />;
};

const Logo = () => {
  return <img className="logo" src={logo1} alt="Logo" />;
};

export { MacImage, MobileImage, CameraImage, PlayStationImage, GarminImage, RazerImage, Logo };
