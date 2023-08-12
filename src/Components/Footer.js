import React, { useState } from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file

const Footer = () => {
  const [emailValue, setEmailValue] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  return (
    <footer className="footer">
          
      <div className="column">
        <img src="./assets/logo.png" alt="Company Logo" className="logo" />
      </div>
      <div className="column">
        <div className="heading">
        <b>BECOME AN ETHOS INSIDER</b>
        </div>
        <div className={`email-input ${emailFocused ? 'focused' : ''}`}>
          <input
            type="text"
            value={emailValue}
            onChange={handleEmailChange}
            onFocus={handleEmailFocus}
            onBlur={() => setEmailFocused(false)}
          />
          <label>Your e-mail</label>
        </div>
        <div className='wrap'>
          <div className="social-icons">
          <img src="./assets/facebook.png" className="facebook" alt="facebook"/>
          
          <img src="./assets/instagram.png" className="instagram"  alt="instagram"/>
          
          <img src="./assets/youtube.png" className="youtube"  alt="youtube"/>
          </div>
        </div>
      </div>
      <div className="column">
      <div className="heading">
      <b>QUICK LINKS</b>
      </div>
        <ul className="quick-links">
          <li>Shop</li>
          <li>Wholesale</li>
          <li>Rewards</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="column">
      <div className="heading">
      <b>POLICIES</b>
      </div>
        <ul className="quick-links">
          <li>Money-Back Guarantee</li>
          <li>Shipping & Returns</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="column">
      <div className="heading">
      <b>COMPANY</b>
      </div>
        <ul className="quick-links">
          <li>Blog</li>
          <li>Order Lookup</li>
          <li>Car Detailers Near Me</li>
          <li>Affiliate Program</li>
          <li>SDS</li>
        </ul>
      </div>
    </footer>
  
  );
};

export default Footer;
