import { Link } from 'react-router-dom';
import { categories } from '../../../../data/categories';
import Category from '../../../../common/category/category.component';
import './categoriesBar.style.css';

const CategoriesBar = () => {
  const categoriesHome = categories.slice(0, 6);
  return (
    <div className="categoriesBarHolder">
      <div className="categoriesNavigation">
        {categoriesHome.map((oneItem, index) => (
          <Category key={index} img={oneItem.img} title={oneItem.title} price={oneItem.price} />
        ))}
      </div>
      <div className="seeAllCategories">
        <Link to="categories">SEE ALL CATEGORIES</Link>
      </div>
    </div>
  );
};

export default CategoriesBar;
