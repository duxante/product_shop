import './item.style.css';

const Item = ({ img, category, name, price, imgCart, handleAddProductToCart, product }) => {
  return (
    <div className="oneItemHolder">
      <img src={img} alt={name} />
      <p className="categoryOfItem">{category}</p>
      <p>{name}</p>
      <div className="priceAndCart">
        <p>{`${price} $`}</p>
        <img onClick={() => handleAddProductToCart(product)} src={imgCart} alt="cart" />
      </div>
    </div>
  );
};

export default Item;
