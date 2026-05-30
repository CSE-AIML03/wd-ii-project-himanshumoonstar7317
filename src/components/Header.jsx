import React from 'react';
import { FaSearch, FaShoppingBag, FaMicrophone } from 'react-icons/fa';
import './Header.css';

function Header({ cartCount, setSearchQuery, navigate }) {
  return (
    <nav className="neon-header">
      
      <div className="neon-logo" onClick={() => navigate("home")}>
        AMAZON<span>SIGMA</span>
      </div>

      <div className="neon-search-container">
        <input 
          type="text" 
          placeholder="Search trending gear..." 
          className="neon-search-input"
          onChange={(e) => {
            setSearchQuery(e.target.value);
            navigate("home");
          }}
        />
        <button className="voice-btn"><FaMicrophone /></button>
        <button className="neon-search-btn"><FaSearch /></button>
      </div>

      <div className="neon-nav-links">
        <div className="neon-link" onClick={() => navigate("home")}>
          <span className="user-tag">USER //</span>
          <span className="action-tag">STOREFRONT</span>
        </div>
        <div className="neon-cart" onClick={() => navigate("cart")}>
          <FaShoppingBag className="cart-icon" />
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;