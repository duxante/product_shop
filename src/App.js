import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './features/navbar/navbar.componet';
import Home from './features/home/home.component';
import NotFound from './features/notFound/notFound.component';
import Categories from './features/categories/categories.component';
import ShopAll from './features/shop/shopAll.component';
import Blog from './features/blog/blog.component';
import Brands from './features/brands/brands.component';
import Footer from './features/footer/footer.component';
import Products from './features/products/products.componet';
import About from './features/about/about.componet';
import Contacts from './features/contacts/contacts.component';
import Profile from './features/profile/profile.component';
import Cart from './features/cart/cart.component';
import Notification from './common/notification/notification.component';
import './App.css';
import './index.css';

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
          <Route path="/categories" element={<Categories />} />
          <Route path="/shop" element={<ShopAll />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/brands" element={<Brands />} />
          <Route
            path="/products"
            element={<Products handleAddProductToCart={handleAddProductToCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/cart"
            element={
              <Cart
                removeProductFromCart={removeProductFromCart}
                clearCart={clearCart}
                selectedProducts={selectedProducts}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
