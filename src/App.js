import './App.css';
import {
  Routes,
  Route,
  Router,
} from "react-router-dom";
import './index.css';
import Profile from './features/profile/profile.component';
import Cart from './features/cart/cart.component';
import Navbar from './features/navbar/navbar.componet';
import Home from './features/home/home.component';
import NotFound from "./features/notFound/notFound.component";
import CategoriesPage from './features/categories/categoriesPage.component';
import ShopAll from './features/shop/shopAll.component';



function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='product_shop/' element={<Home />} />
      <Route path='product_shop/profile' element={<Profile />} />
      <Route path='product_shop/cart' element={<Cart />} />
      <Route path='product_shop/categories' element={<CategoriesPage />} />
      <Route path='product_shop/shop' element={<ShopAll />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
