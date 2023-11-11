import React from 'react';
import { Logo } from '../images/index';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <img className="img-fluid mb-4" src={Logo} alt="Logo" /> <br/>
          <div className="address-section">
             <p> 12, New York 12,</p>
        
         <p>   MD - 123, USA.</p>
          <p>  1.800.123.456789</p>
          <p>  info@ecoshop.com</p>
        </div>
        </div>

       

        <div className="links-section">
          <h3>HELPFUL LINKS</h3>
          <ul>
            <li>Products</li>
            <li>Find a Store</li>
            <li>Features</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
            <li>Press Kit</li>
          </ul>
        </div>

        <div className="shop-section">
          <h3>SHOP</h3>
          <ul>
            <li>About Us</li>
            <li>Career</li>
            <li>Shipping Methods</li>
            <li>Contact</li>
            <li>Support</li>
            <li>Retailer</li>
          </ul>
        </div>

        <div className="account-section">
          <h3>MY ACCOUNT</h3>
          <ul>
            <li>Login</li>
            <li>My Account</li>
            <li>My Cart</li>
            <li>Wishlist</li>
            <li>Checkout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
