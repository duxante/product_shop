import "./oneCategory.style.css";

const OneCategory = ({img, title, price}) => {
    return(
        <div className="oneCategoryHolder">
            <img src={img} />
            <div className="oneCategoryTitleAndPrice">
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
        </div>
    )
};

export default OneCategory;