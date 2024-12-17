// import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Shop</h3>
          <div className="footer-links">
            <a href="/shop">Shop</a>
            <a href="/stockists">Stockists</a>
            <a href="/blog">Blog</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">FAQ</h3>
          <div className="footer-links">
            <a href="/shipping">Shipping & Returns</a>
            <a href="/store-policy">Store Policy</a>
            <a href="/payment-methods">Payment Methods</a>
            <a href="/read-more">Read more</a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <div className="footer-links">
            <a href="/final-year-projects/ai-ml">AI & ML Engineering final year projects</a>
            <a href="/final-year-projects/mechanical">Mechanical Engineering final year projects</a>
            <a href="/final-year-projects/mechatronics">Mechatronics Engineering final year projects</a>
            <a href="/final-year-projects/electrical">Electrical Engineering final year projects</a>
            <a href="/final-year-projects/ise">ISE Engineering final year projects</a>
            <a href="/final-year-projects/aeronautics">Aeronautics Engineering final year projects</a>
            <a href="/final-year-projects/cse">CSE Engineering final year projects</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023. Powered and secured by Trispider</p>
      </div>
    </footer>
  );
};

export default Footer;