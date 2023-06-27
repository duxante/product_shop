import './categoriesBar.style.css';
import { categories } from '../../../../data/categories';
import { Link } from 'react-router-dom';
import OneCategory from '../../../../common/category/oneCategory.component';

const CategoriesBar = () => {
  return (
    <div className="categoriesBarHolder">
      <div className="categoriesNavigation">
        {categories.map((oneItem, index) => (
          <OneCategory
            key={index}
            img={oneItem.img}
            title={oneItem.title}
            price={oneItem.price}
          />
        ))}
      </div>
      <div className="seeAllCategories">
        <Link to="categories">SEE ALL CATEGORIES</Link>
      </div>
    </div>
  );
};

export default CategoriesBar;
