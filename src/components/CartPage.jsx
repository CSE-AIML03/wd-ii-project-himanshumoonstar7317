import React from 'react';
import './CartPage.css';

const BACKUP_IMAGE = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400";

function CartPage({ cartItems, updateQuantity, navigate }) {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <h2>Shopping Cart Matrix //</h2>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your Matrix Cart is completely empty.</p>
          <button className="shop-now-btn" onClick={() => navigate("home")}>RETURN TO STORE</button>
        </div>
      ) : (
        <div className="cart-content-wrapper">
          <div className="cart-items-list">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item-card">
                {/* 🛠️ onError safety check */}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="cart-item-img" 
                  onError={(e) => { e.target.src = BACKUP_IMAGE; }}
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">₹{item.price.toLocaleString('en-IN')}</p>
                  <p className="item-delivery">Eligible for FREE Delivery</p>
                  
                  <div className="qty-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-checkout-box">
            <h3>Subtotal ({cartItems.reduce((a, b) => a + b.quantity, 0)} items):</h3>
            <p className="total-amount">₹{subtotal.toLocaleString('en-IN')}</p>
            <button className="checkout-btn" onClick={() => alert("🎉 Transmission Successful! Order Dispatched Into The Matrix.")}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;