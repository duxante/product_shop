import './oneCategory.style.css';

const OneCategory = ({ img, title, price }) => {
  return (
    <div className="oneCategoryHolder">
      {img}
      <div className="oneCategoryTitleAndPrice">
        <h3>{title}</h3>
        <p>{`from ${price.toFixed(2)} $`}</p>
      </div>
    </div>
  );
};

export default OneCategory;
