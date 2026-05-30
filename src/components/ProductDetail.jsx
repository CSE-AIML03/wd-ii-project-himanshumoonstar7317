import React from 'react';
import './ProductDetail.css';

function ProductDetail({ product, addToCart, navigate }) {
  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate("home")}>← BACK TO MATRIX</button>
      
      <div className="detail-container">
        <div className="detail-img-box">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="detail-info-box">
          <span className="detail-tag">{product.discount}</span>
          <h1>{product.name}</h1>
          <p className="rating-row">⭐ {product.rating} | <span className="blue-text">{product.reviews} ratings</span></p>
          <hr className="neon-hr" />
          <p className="detail-price">Price: <span>₹{product.price.toLocaleString('en-IN')}</span></p>
          <p className="delivery-info">FREE Delivery: <span className="green-text">{product.delivery}</span></p>
          
          <div className="specs-box">
            <h3>Product Specifications //</h3>
            <ul>
              {product.specs.map((spec, i) => <li key={i}>{spec}</li>)}
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