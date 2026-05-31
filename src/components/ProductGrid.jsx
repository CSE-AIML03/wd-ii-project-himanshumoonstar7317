import React, { useState, useEffect } from 'react';
import './ProductGrid.css';

// Backup image link agar main link fail ho jaye
const BACKUP_IMAGE = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400";

function ProductGrid({ searchQuery, viewProduct, addToCart }) {
  const megaProductsPool = [
    { id: 1, name: "Ray-Ban Meta AI Smart Glasses (Gen 3)", price: "29,999", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=400", discount: "Hot Deal // 10% OFF" },
    { id: 2, name: "Sony PlayStation 5 Pro (8K Edition)", price: "69,990", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=400", discount: "Trending #1 // 5% OFF" },
    { id: 3, name: "Apple Vision Pro Lite - Spatial Computer", price: "1,49,900", image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=400", discount: "Premium Tech // 15% OFF" },
    { id: 4, name: "Nothing Ear (3) ANC Cyber Earbuds", price: "9,999", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400", discount: "Best Seller // 25% OFF" },
    { id: 5, name: "Cyberpunk Mechanical Keyboard (Gasket Mount)", price: "7,499", image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=400", discount: "Gamers Choice // 20% OFF" },
    { id: 6, name: "DJI Avata 2 FPV Drone (FPV Goggles Pack)", price: "1,14,999", image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=400", discount: "Limited Stock // 30% OFF" },
    { id: 7, name: "Tesla Cyberquad - Mini Electric Bike", price: "2,20,000", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=400", discount: "New Launch // 5% OFF" },
    { id: 8, name: "Samsung Galaxy S26 Ultra (AI Titan)", price: "1,34,999", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400", discount: "Top Rated // 12% OFF" },
    { id: 9, name: "Alienware Curved Quantum Dot Monitor", price: "89,999", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400", discount: "360Hz Gaming // 18% OFF" },
    { id: 10, name: "Anker Prime 250W Cyber Powerbank", price: "14,999", image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b177?auto=format&fit=crop&q=80&w=400", discount: "⚡ Power Deal // 15% OFF" },
    { id: 11, name: "RTX 5090 Ti Founders Edition GPU", price: "1,99,999", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=400", discount: "Extreme Tech // 5% OFF" },
    { id: 12, name: "Razer Iskur Gaming Throne V2", price: "42,999", image: "https://images.unsplash.com/photo-1598550476439-6847785fce6e?auto=format&fit=crop&q=80&w=400", discount: "Ergonomic // 22% OFF" },
    { id: 13, name: "ASUS ROG Ally X Handheld Console", price: "69,990", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400", discount: "10% OFF" },
    { id: 14, name: "Cyberpunk Leather Jacket (Neon LED)", price: "12,499", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400", discount: "Fashion // 35% OFF" },
    { id: 15, name: "Meta Quest 4 VR Standalone Headset", price: "49,999", image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=400", discount: "Best Choice" },
    { id: 16, name: "Logitech G Pro X Superlight Neon Mouse", price: "13,995", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=400", discount: "Pro Gamer" }
  ];

  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const randomOrder = [...megaProductsPool].sort(() => 0.5 - Math.random());
    setShuffledProducts(randomOrder);
  }, []);

  const filteredProducts = shuffledProducts.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const loadMoreProducts = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 4, shuffledProducts.length));
  };

  const productsToShow = filteredProducts.slice(0, visibleCount);

  return (
    <div className="main-content">
      <div className="hero-banner">
        <div className="hero-overlay">
          <h1>2026 TECH MATRIX IS LIVE</h1>
          <p>UP TO 80% OFF ON TRENDING NEXT-GEN GEAR // ENTER THE FUTURE</p>
          <button className="hero-btn">SHOP THE DEALS</button>
        </div>
      </div>

      <div className="products-container">
        <h2 className="section-title">Infinite Sigma Deals For You //</h2>
        
        <div className="products-grid">
          {productsToShow.map(product => (
            <div key={product.id} className="product-card">
              <span className="discount-tag">{product.discount}</span>
              <div className="product-img-container" onClick={() => viewProduct(product)} style={{cursor: 'pointer'}}>
                {/* 🛠️ Yahan onError laga diya jo image crash hone par backup load karega */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-img" 
                  onError={(e) => { e.target.src = BACKUP_IMAGE; }}
                />
              </div>
              <div className="product-info">
                <h3 className="product-name" onClick={() => viewProduct(product)} style={{cursor: 'pointer'}}>{product.name}</h3>
                <div className="price-section">
                  <span className="product-price">₹{product.price}</span>
                </div>
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                  ADD TO MATRIX
                </button>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filteredProducts.length && (
          <div className="load-more-box">
            <button className="load-more-btn" onClick={loadMoreProducts}>
              EXPLORE MORE TRACES ↓
            </button>
          </div>
        )}s
      </div>
    </div>
  );
}

export default ProductGrid;