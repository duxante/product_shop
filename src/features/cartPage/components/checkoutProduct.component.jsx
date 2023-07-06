import './style/checkoutItems.style.css';

const CheckoutProduct = ({ image, category, name, price, removeProductFromCart, productId }) => {
  return (
    <div className="oneProduct">
      <div className="oneProductDescribe">
        <img src={image} alt="" />
        <div>
          <p className="productName">{category}</p>
          <p>{name}</p>
        </div>
      </div>
      <p>{price}</p>
      <p onClick={() => removeProductFromCart(productId, name)} className="closeIt">
        X
      </p>
    </div>
  );
};

export default CheckoutProduct;
