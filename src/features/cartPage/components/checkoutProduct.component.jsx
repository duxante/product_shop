import './style/checkoutItems.style.css';

const CheckoutProduct = ({ image, category, name, price }) => {
  return (
    <div className="oneProduct">
      <div className="oneProductDescribe">
        <img src={image} alt="" />
        <div>
          <p className="productName">{category}</p>
          <p>{name}</p>
        </div>
      </div>
      <p>${price}</p>
      <p className="closeIt">X</p>
    </div>
  );
};

export default CheckoutProduct;
