
import React from 'react';
import { Logo } from '../images/index';
const Footer = () => {
    return (
      <div  style={{ backgroundColor: "#032541" }}>
        <div className=" text-light ">
          <div className="contain " style={{width: "1200px", margin: "0 auto"}} >
            <div className="row1">

              <div className="col-md-3">
              <img className="img-fluid" src={Logo} alt="Logo"  style={{width: '100px'}}/>
                <address>
                  Street No. 12, New York 12,<br />
                  MD - 123, USA.<br />
                  1.800.123.456789<br />
                  info@ecoshop.com
                </address>
              </div>
  
              <div className="col-md-3">
                <h3>HELPFUL LINKS</h3>
                <ul className="">
                  <li>Products</li>
                  <li>Find a Store</li>
                  <li>Features</li>
                  <li>Privacy Policy</li>
                  <li>Blog</li>
                  <li>Press Kit</li>
                </ul>
              </div>
  
              <div className="col-md-3">
                <h3>SHOP</h3>
                <ul className="">
                  <li>About Us</li>
                  <li>Career</li>
                  <li>Shipping Methods</li>
                  <li>Contact</li>
                  <li>Support</li>
                  <li>Retailer</li>
                </ul>
              </div>
  
              <div className="col-md-3">
                <h3>MY ACCOUNT</h3>
                <ul className="list-unstyled">
                  <li>Login</li>
                  <li>My Account</li>
                  <li>My Cart</li>
                  <li>Wishlist</li>
                  <li>Checkout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  
 
  
  