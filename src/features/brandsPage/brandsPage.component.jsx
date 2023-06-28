import Heading from '../../common/heading/heading.component';
import './brandsPage.style.css';
import {
  Acer,
  Apple,
  Dell,
  HpLogo,
  Intel,
  LGLogo,
  Lenovo,
  Microsoft,
  Nikon,
  Rog,
  SamsungTransparent,
  Sony,
} from '../../assets';

const BrandsPage = () => {
  return (
    <div className="popularBrandsPageHolder">
      <Heading headingText="Brands" />
      <div className="popularBrandsPageImages">
        <div className="imageAndText">
          <Apple />
          <p>Apple</p>
        </div>
        <div className="imageAndText">
          <SamsungTransparent />
          <p>Samsung</p>
        </div>
        <div className="imageAndText">
          <Sony />
          <p>Sony</p>
        </div>
        <div className="imageAndText">
          <Microsoft />
          <p>Microsoft</p>
        </div>
        <div className="imageAndText">
          <Intel />
          <p>Intel</p>
        </div>
        <div className="imageAndText">
          <HpLogo />
          <p>HP</p>
        </div>
        <div className="imageAndText">
          <LGLogo />
          <p>LG</p>
        </div>
        <div className="imageAndText">
          <Lenovo />
          <p>Lenovo</p>
        </div>
        <div className="imageAndText">
          <Rog />
          <p>Asus</p>
        </div>
        <div className="imageAndText">
          <Acer />
          <p>Acer</p>
        </div>
        <div className="imageAndText">
          <Dell />
          <p>Dell</p>
        </div>
        <div className="imageAndText">
          <Nikon />
          <p>Nikon</p>
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;
