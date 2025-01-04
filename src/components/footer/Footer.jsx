import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-title">Snobella</h2>
          <p className="footer-description">
            The wise man therefore always holds selection The wise man therefore always rejects pleasures to secure other greater
          </p>
          <div className="footer-contact">
            <p>
              <i className="fa-regular fa-envelope"></i> Snobella@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> +748 383 23 14
            </p>
          </div>
          <button className="footer-button">
            <i className="fa-regular fa-paper-plane"></i> Send message
          </button>
        </div>

        <div className="footer-middle">
          <div className="footer-column">
            <h3 className="footer-heading">Shop</h3>
            <ul>
              <li>Shoulder Bag</li>
              <li>Backpack</li>
              <li>Tote Bag</li>
              <li>Hand Bag</li>
              <li>Evening bags</li>
              <li>Purse</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul>
              <li>About us</li>
              <li>Contact</li>
              <li>Terms of Use</li>
              <li>Customer service</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Help</h3>
            <ul>
              <li>FAQ</li>
              <li>Delivery</li>
              <li>Cancellation of the order</li>
              <li>Don't go back</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2020. All rights reserved.</p>
        <div className="footer-socials">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-whatsapp"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
