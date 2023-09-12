import { Link } from 'react-router-dom';
import { Apple, HpLogo, Intel, Microsoft, Samsung, Sony } from '../../../../assets';
import Heading from '../../../../common/heading/heading.component';
import './popularBrands.style.css';

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
      <Link className="allBrandsLink" to="/brands">
        SEE ALL BRANDS
      </Link>
    </div>
  );
};

export default PopularBrands;
