import React from 'react';
import './ProductGrid.css';

function ProductGrid({ products, searchQuery, viewProduct, addToCart }) {
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <h2 className="section-title">Global Trending Deals // May 2026</h2>
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <span className="discount-tag">{product.discount}</span>
              {/* Image par click karne par details khulengi */}
              <div className="product-img-container" onClick={() => viewProduct(product)} style={{cursor: 'pointer'}}>
                <img src={product.image} alt={product.name} className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-name" onClick={() => viewProduct(product)} style={{cursor: 'pointer'}}>{product.name}</h3>
                <div className="price-section">
                  <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
                </div>
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                  ADD TO MATRIX
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;