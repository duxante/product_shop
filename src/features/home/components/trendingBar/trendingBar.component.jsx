import { Link } from 'react-router-dom';
import Item from '../../../../common/item/item.component';
import { trendingItems } from '../../../../data/products';
import './trendingBar.style.css';
import Heading from '../../../../common/heading/heading.component';

const TrendingBar = ({ handleAddProductToCart }) => {
  return (
    <div className="trendingbarHolder">
      <Heading headingText="trending items" />
      <div className="trendingBarNavigation">
        {trendingItems.map((oneItem, index) => (
          <Item
            product={oneItem}
            handleAddProductToCart={handleAddProductToCart}
            key={index}
            img={oneItem.img}
            category={oneItem.category}
            name={oneItem.name}
            price={oneItem.price}
            imgCart={oneItem.imgCart}
          />
        ))}
      </div>
      <div className="shopAll">
        <Link to="products">SHOP ALL</Link>
      </div>
    </div>
  );
};

export default TrendingBar;
