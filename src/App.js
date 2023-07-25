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
import Practice from './practice/practice.component';
import { useState } from 'react';
import Notification from './common/notification/notification.component';

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [notificationConfig, setNotificationConfig] = useState({
    text: '',
    severity: '',
    visible: false,
  });

  const handleAddProductToCart = (product) => {
    const productExist = selectedProducts.some((oneProduct) => oneProduct.id === product.id);
    if (productExist) {
      setNotificationConfig({
        text: `${product.name} is already in the cart!`,
        severity: 'error',
        visible: true,
      });
    } else {
      const allProducts = [...selectedProducts, product];
      setSelectedProducts(allProducts);
      setNotificationConfig({
        text: `${product.name} successfully added to cart!`,
        severity: 'success',
        visible: true,
      });
    }
  };
  const removeProductFromCart = (productId, name) => {
    let updatedProducts = selectedProducts.filter((product) => product.id !== productId);
    setSelectedProducts(updatedProducts);

    setNotificationConfig({
      text: `${name} is successfully removed from the cart!`,
      severity: 'success',
      visible: true,
    });
  };

  const clearCart = () => {
    setSelectedProducts([]);
  };
  return (
    <>
      {notificationConfig.visible && (
        <Notification
          notificationConfig={notificationConfig}
          setNotificationConfig={setNotificationConfig}
        />
      )}
      <div className="App">
        <Navbar selectedProducts={selectedProducts} />
        <Routes>
          <Route path="/" element={<Home handleAddProductToCart={handleAddProductToCart} />} />
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
          <Route
            path="/cartPage"
            element={
              <CartPage
                removeProductFromCart={removeProductFromCart}
                clearCart={clearCart}
                selectedProducts={selectedProducts}
              />
            }
          />
          <Route path="/practice" element={<Practice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
