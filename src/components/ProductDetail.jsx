import React from 'react';
import './ProductDetail.css';

const BACKUP_IMAGE = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400";

function ProductDetail({ product, addToCart, navigate }) {
  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate("home")}>← BACK TO MATRIX</button>
      
      <div className="detail-container">
        <div className="detail-img-box">
          {/* 🛠️ onError safe validation */}
          <img 
            src={product.image} 
            alt={product.name} 
            onError={(e) => { e.target.src = BACKUP_IMAGE; }}
          />
        </div>
        
        <div className="detail-info-box">
          <span className="detail-tag">{product.discount || "SIGMA DEAL"}</span>
          <h1>{product.name}</h1>
          <p className="rating-row">⭐ {product.rating || "4.8"} | <span className="blue-text">{product.reviews || "1,200"} ratings</span></p>
          <hr className="neon-hr" />
          <p className="detail-price">Price: <span>₹{product.price.toLocaleString('en-IN')}</span></p>
          <p className="delivery-info">FREE Delivery: <span className="green-text">{product.delivery || "In 2 Days"}</span></p>
          
          <div className="specs-box">
            <h3>Product Specifications //</h3>
            <ul>
              {product.specs ? product.specs.map((spec, i) => <li key={i}>{spec}</li>) : (
                <>
                  <li>Next-Gen Performance Architecture</li>
                  <li>Futuristic Cyberpunk Aesthetic Design</li>
                </>
              )}
            </ul>
          </div>
          
          <button className="buy-btn" onClick={() => { addToCart(product); navigate("cart"); }}>
            BUY NOW
          </button>
          <button className="add-matrix-btn" onClick={() => addToCart(product)}>
            ADD TO MATRIX
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;