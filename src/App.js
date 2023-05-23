import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import './index.css';
import Profile from './features/profile/profile.component';
import Cart from './features/cart/cart.component';
import Navbar from './features/navbar/navbar.componet';
import Home from './features/home/home.component';
import NotFound from './features/notFound/notFound.component';
import CategoriesPage from './features/categories/categoriesPage.component';
import ShopAll from './features/shop/shopAll.component';
import BlogPage from './features/blogPage/blogPage.component';
import BrandsPage from './features/brandsPage/brandsPage.component';
import Footer from './features/footer/footer.component';
import Products from './features/products/products.componet';
import AboutPage from './features/aboutPage/aboutPage.componet';
import ContactsPage from './features/contactsPage/contactsPage.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/shop" element={<ShopAll />} />
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/brandsPage" element={<BrandsPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/contactsPage" element={<ContactsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
