import './home.style.css';
import HomeSlider from './components/slider/slider.component';
import CategoriesBar from './components/categoriesBar/categoriesBar.component';
import TrendingBar from './components/trendingBar/trendingBar.component';
import PopularBrands from './components/popularBrands/popularBrands.component';
import Blog from './components/blogHome/blogHolder.component';

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <CategoriesBar />
      <TrendingBar />
      <PopularBrands />
      <Blog />
    </div>
  );
};

export default Home;
