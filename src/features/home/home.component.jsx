import "./home.style.css";
import HomeSlider from "./components/slider/slider.component";
import CategoriesBar from "./components/categoriesBar/categoriesBar.component";
import TrendingBar from "./components/trendingBar/trendingBar.component";
import PopularBrands from "./components/popularBrands/popularBrands.component";
import Blog from "./components/blogHome/blogHolder.component";
import Footer from "../footer/footer.component";

const Home = () => {
    return(
        <div>
            <HomeSlider />
            <CategoriesBar />
            <TrendingBar />
            <PopularBrands />
            <Blog />
            <Footer />
        </div>
    )
}

export default Home;