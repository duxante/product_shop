import { useState } from 'react';
import './products.style.css';
import Heading from '../../common/heading/heading.component';
import Item from '../../common/item/item.component';
import { products } from '../../data/products';

const Products = ({ handleAddProductToCart }) => {
  return (
    <div className="productsPageHolder">
      <Heading headingText="All Products" />
      <div className="productsPageNavigation">
        {products.map((product, index) => (
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
