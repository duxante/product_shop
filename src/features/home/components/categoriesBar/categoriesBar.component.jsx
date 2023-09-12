import { Link } from 'react-router-dom';
import { categories } from '../../../../data/categories';
import OneCategory from '../../../../common/category/oneCategory.component';
import './categoriesBar.style.css';

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
