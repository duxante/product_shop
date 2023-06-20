import './App.css';
import { Routes, Route } from 'react-router-dom';
import './index.css';
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
import ProfilePage from './features/profilePage/profilePage.component';
import CartPage from './features/cartPage/cartPage.component';
import { useState } from 'react';

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  console.log(selectedProducts, 'All Selected Products');
  const handleAddProductToCart = (product) => {
    console.log(product, 'Single Product');
    const allProducts = [...selectedProducts, product];
    setSelectedProducts(allProducts);
  };
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/shop" element={<ShopAll />} />
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/brandsPage" element={<BrandsPage />} />
        <Route
          path="/products"
          element={<Products handleAddProductToCart={handleAddProductToCart} />}
        />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/contactsPage" element={<ContactsPage />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/cartPage" element={<CartPage selectedProducts={selectedProducts} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
