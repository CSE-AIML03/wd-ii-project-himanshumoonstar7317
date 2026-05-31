import React, { useState } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import CartPage from './components/CartPage';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + amount;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  const viewProduct = (product) => {
    // String price ko normal number mein clean karne ke liye detail page ko bhejne se pehle
    const cleanProduct = { ...product, price: Number(product.price.replace(/,/g, '')) };
    setSelectedProduct(cleanProduct);
    setCurrentPage("detail");
  };

  return (
    <div className="app">
      <Header cartCount={totalCartItems} setSearchQuery={setSearchQuery} navigate={setCurrentPage} />
      
      {currentPage === "home" && (
        <ProductGrid searchQuery={searchQuery} viewProduct={viewProduct} addToCart={addToCart} />
      )}

      {currentPage === "detail" && selectedProduct && (
        <ProductDetail product={selectedProduct} addToCart={addToCart} navigate={setCurrentPage} />
      )}

      {currentPage === "cart" && (
        <CartPage cartItems={cart} updateQuantity={updateQuantity} navigate={setCurrentPage} />
      )}
    </div>
  );
}

export default App;