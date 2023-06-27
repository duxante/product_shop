import './item.style.css';

const Item = ({ img, category, name, price, imgCart, handleAddProductToCart, product }) => {
  return (
    <div className="oneItemHolder">
      <img src={img} />
      <p className="categoryOfItem">{category}</p>
      <p>{name}</p>
      <div className="priceAndCart">
        <p>{`${price} $`}</p>
        <img onClick={() => handleAddProductToCart(product)} src={imgCart} />
      </div>
    </div>
  );
};

export default Item;
