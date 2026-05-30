import React, { useState } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import CartPage from './components/CartPage';
import './App.css';

// 2026 ke trending products ka static data
const ALL_PRODUCTS = [
  { id: 1, name: "Ray-Ban Meta AI Smart Glasses (Gen 3)", price: 29999, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=400", discount: "Hot Deal // 10% OFF", rating: 4.7, reviews: 2450, specs: ["Built-in Meta AI Assistant", "12MP Ultra-wide Camera", "Open-ear Audio Speakers"], delivery: "Tomorrow, May 30" },
  { id: 2, name: "Sony PlayStation 5 Pro (8K Edition)", price: 69990, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=400", discount: "Trending #1 // 5% OFF", rating: 4.9, reviews: 8912, specs: ["Advanced Ray Tracing", "2TB High-Speed SSD", "8K Resolution Support"], delivery: "Sunday, May 31" },
  { id: 3, name: "Apple Vision Pro Lite - Spatial Computer", price: 149900, image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=400", discount: "Premium Tech // 15% OFF", rating: 4.5, reviews: 310, specs: ["Dual 4K Micro-OLED Displays", "Eye and Hand Tracking", "Spatial Audio Tech"], delivery: "Monday, June 1" },
  { id: 4, name: "Nothing Ear (3) ANC Cyber Earbuds", price: 9999, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400", discount: "Best Seller // 25% OFF", rating: 4.6, reviews: 1540, specs: ["45dB Active Noise Cancellation", "Hi-Res Wireless Audio", "Transparent Cyber Design"], delivery: "Tomorrow, May 30" },
  { id: 5, name: "Cyberpunk Mechanical Keyboard (Gasket)", price: 7499, image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=400", discount: "Gamers Choice // 20% OFF", rating: 4.8, reviews: 920, specs: ["Hot-Swappable Switches", "Gasket Mounted Structure", "RGB Neon Backlit"], delivery: "Wednesday, June 3" },
  { id: 6, name: "DJI Avata 2 FPV Drone (Goggles Pack)", price: 114999, image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=400", discount: "Limited Stock // 30% OFF", rating: 4.7, reviews: 680, specs: ["Immersive FPV Flight", "1/1.3-inch CMOS Sensor", "Ultra-wide 155° FOV"], delivery: "Tuesday, June 2" }
];

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState("home"); // home, detail, cart
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Cart mein item add karne ka system
  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Quantity change karne ka system
  const updateQuantity = (id, amount) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + amount;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  // Total items counter
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Product page par bhejne ka handler
  const viewProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage("detail");
  };

  return (
    <div className="app">
      <Header 
        cartCount={totalCartItems} 
        setSearchQuery={setSearchQuery} 
        navigate={setCurrentPage} 
      />
      
      {currentPage === "home" && (
        <ProductGrid 
          products={ALL_PRODUCTS} 
          searchQuery={searchQuery} 
          viewProduct={viewProduct} 
          addToCart={addToCart} 
        />
      )}

      {currentPage === "detail" && selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          addToCart={addToCart} 
          navigate={setCurrentPage} 
        />
      )}

      {currentPage === "cart" && (
        <CartPage 
          cartItems={cart} 
          updateQuantity={updateQuantity} 
          navigate={setCurrentPage} 
        />
      )}
    </div>
  );
}

export default App;