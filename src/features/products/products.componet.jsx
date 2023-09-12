import { useState } from 'react';
import { products } from '../../data/products';
import Heading from '../../common/heading/heading.component';
import Item from '../../common/item/item.component';
import './products.style.css';

const Products = ({ handleAddProductToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const handleFilterByCategory = (category) => {
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  };
  const handleResetFilter = () => {
    setFilteredProducts([]);
  };
  return (
    <div className="productsPageHolder">
      <Heading headingText="All Products" />
      <div className="buttonsForCategories">
        <button className="blueButton" onClick={() => handleResetFilter()}>
          Show All
        </button>
        <button className="blueButton" onClick={() => handleFilterByCategory('Laptops')}>
          Laptops
        </button>
        <button className="blueButton" onClick={() => handleFilterByCategory('Mobiles')}>
          Mobiles
        </button>
      </div>
      <div className="productsPageNavigation">
        {(filteredProducts.length > 0 ? filteredProducts : products).map((product, index) => (
          <Item
            product={product}
            handleAddProductToCart={handleAddProductToCart}
            key={index}
            img={product.img}
            category={product.category}
            name={product.name}
            price={product.price}
            imgCart={product.imgCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
