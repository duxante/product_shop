import HomeSlider from './components/slider/slider.component';
import CategoriesBar from './components/categoriesBar/categoriesBar.component';
import TrendingBar from './components/trendingBar/trendingBar.component';
import PopularBrands from './components/popularBrands/popularBrands.component';
import Blog from './components/blogHome/blogHome.component';
import './home.style.css';

const Home = ({ handleAddProductToCart }) => {
  return (
    <div>
      <HomeSlider />
      <CategoriesBar />
      <TrendingBar handleAddProductToCart={handleAddProductToCart} />
      <PopularBrands />
      <Blog />
    </div>
  );
};

export default Home;
