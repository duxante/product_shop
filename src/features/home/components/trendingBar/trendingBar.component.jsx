import { Link } from 'react-router-dom';
import { trendingItems } from '../../../../data/products';
import Item from '../../../../common/item/item.component';
import Heading from '../../../../common/heading/heading.component';
import './trendingBar.style.css';

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
