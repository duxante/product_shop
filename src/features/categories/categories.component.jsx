import { categories } from '../../data/categories';
import Category from '../../common/category/category.component';
import Heading from '../../common/heading/heading.component';
import './categories.style.css';

const Categories = () => {
  return (
    <div className="categoriesHolder">
      <Heading headingText="Categories" />
      <div className="categoriesPageHolder">
        <div className="categories">
          {categories.map((oneItem, index) => (
            <Category key={index} img={oneItem.img} title={oneItem.title} price={oneItem.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
