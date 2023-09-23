import React from "react";
import "./CheckoutPage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomInput from "./CustomInput";
import OrderSummary from "./OrderSummary";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { faLock } from '@fortawesome/free-solid-svg-icons';


const dummyProduct = {
  name: 'Dummy Product',
  quantity: 3,
  price: 19.99,
  image: 'https://via.placeholder.com/40x40', // Dummy image URL
};

const shippingMethods = [
  {
    id: "standard",
    label: "Standard Flat Rate (est. 2-3 days)",
    cost: "$4.99",
  },
  // Add more shipping methods to this array if needed
];

const CheckoutPage = () => {

  const navigate = useNavigate();

  const handleBackToCartClick = () => {
    console.log('Back To Card Clicked');
    navigate('/CartPage');
  }

  const handleCheckoutClick = () => {
    console.log(`Clicked on Checkout`);
    navigate(`/CheckoutPage`);
  };

  return (
    <div>
      <Navbar shouldExecute = {false} />
      <div className="Parent">
        <div className="SecureCheckout">
        <div className="address-display">
        <h6><strong>Shipping</strong>  /  Payment  /  Confirm Order</h6>
        </div>
          <div className="checkout-heading">
            <h2>Secure Checkout</h2>
            <hr />
          </div>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <CustomInput label="Email*"/>
            <CustomInput label="Email Confirmation*"/>
            <div className="checkbox">
              <input type="checkbox" id="newsletter" />
              <label htmlFor="newsletter">
                Sign up to get the latest news, deals, and product releases sent
                to your inbox! We will not share your personal information.
                Please review our Privacy Policy.
              </label>
            </div>

            <CustomInput label="Phone Number*"/>


            
            <div className="checkbox">
              <input type="checkbox" id="marketingTexts" />
              <label htmlFor="marketingTexts">
                Please sign me up to receive marketing text messages.
              </label>
            </div>
          </div>
           
            {/* Shipping Information Section */}
            <div className="shipping-info">
            <h3>Shipping Address</h3>
            <div className="FL-container">
            <CustomInput label="First Name*"/>
            <CustomInput label="Last Name*"/>
            </div>
            <CustomInput label="Address 1*"/>
            <CustomInput label="Address 2"/>
            <div className="CPZ-container">

            <div className="CITY-INPUT">
            <CustomInput label="City*"/>
            </div>

              <div>
              <select className="province-dropdown">
                <option>Province</option>
                {/* Add other province options here */}
              </select>
              </div>

              <div className="ZIP-INPUT">
              <CustomInput label="ZIP Code*"/>
              </div>
            </div>
          </div>
          {/* End of Shipping Information Section */}

          {/* Shipping Method Section */}
          <div className="shipping-method">
            <h3>Shipping Method</h3>
            {shippingMethods.map((method) => (
              <div className="shipping-option" key={method.id}>
                <input
                  type="radio"
                  id={method.id}
                  name="shippingMethod"
                  value={method.id}
                />
                <label htmlFor={method.id}>
                  <div className="shipping-label">{method.label}</div>
                  <div className="shipping-cost">{method.cost}</div>
                </label>
              </div>
            ))}
          </div>
          {/* End of Shipping Method Section */}
          <div className="Buttons-Section">
         
          <div className="BackToCart">
          <button onClick={handleBackToCartClick} className="back-link">
            <FaArrowLeft className="back-icon" />
            Back To Cart
          </button>
          </div>

          <div className="Checkout-Button">
            <button onClick={handleCheckoutClick} className="roundbutton-checkout">
              <span className="locksymbol-checkout">
                <FontAwesomeIcon icon={faLock} />
              </span>
              Checkout
            </button>
          </div>
          </div>
        </div>
        <div className="OrderSummary">
          <OrderSummary shipping={5.99} tax={2.5} products={[dummyProduct]} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CheckoutPage;
