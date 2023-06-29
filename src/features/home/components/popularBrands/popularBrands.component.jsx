import { Link } from 'react-router-dom';
import './popularBrands.style.css';
import Heading from '../../../../common/heading/heading.component';
import { Apple, HpLogo, Intel, Microsoft, Samsung, Sony } from '../../../../assets';

const PopularBrands = () => {
  return (
    <div className="popularBrandsHolder">
      <Heading headingText="Popular brands" />
      <div className="popularBrandsImages">
        <Apple />
        <Samsung />
        <Sony />
        <Microsoft />
        <Intel />
        <HpLogo />
      </div>
      <Link className="allBrandsLink" to="/brandsPage">
        SEE ALL BRANDS
      </Link>
    </div>
  );
};

export default PopularBrands;
