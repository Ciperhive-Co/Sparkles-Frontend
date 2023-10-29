import React, { useState } from 'react';
import './CartOrderSummary.css'; // Create this CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';


const CartOrderSummary = ({ shipping = 0, tax = 0, total = 0}) => {
    const [isCouponOpen, setIsCouponOpen] = useState(false);

  
    const toggleCoupon = () => {
      setIsCouponOpen(!isCouponOpen);
    };

    const totalItemsCost =total;

    const calculatedTotalItemsCost = (totalItemsCost + shipping + tax).toFixed(
      Math.max(
        totalItemsCost.toString().split('.')[1]?.length || 0,
        shipping.toString().split('.')[1]?.length || 0,
        tax.toString().split('.')[1]?.length || 0
      )
    );
    
    const totalCost = parseFloat(calculatedTotalItemsCost);

  return (
    <div className="order-summary-bar">
      {/* Section 1: Order Summary */}
      <div className="section-order-summary">
        <div className="order-summary-title">
          <h4>Order Summary</h4>
          <span className="lock-symbol">
          <FontAwesomeIcon icon={faLock} /> {/* Replace with Font Awesome lock icon */}
          </span>
        </div>
      </div>

      {/* Section 2: Items, Shipping, and Tax */}
    <div className="section IST">
      <div className="rowIST">
          <div className="label">Items</div>
          <div className="value">${totalItemsCost}</div> {/* Display items as currency */}
        </div>
        <div className="rowIST">
          <div className="label">Shipping</div>
          <div className="value">${shipping}</div> {/* Display shipping as currency */}
        </div>
        <div className="rowIST">
          <div className="label">Tax</div>
          <div className="value">${tax}</div> {/* Display tax as currency */}
        </div>
      </div>

         {/* Section 3: Have a Coupon? */}
      <div className="section coupon">
        <div className="coupon-label"> <strong>Have a Coupon?</strong></div>
        <button className={`coupon-toggle ${isCouponOpen ? 'open' : ''}`} onClick={toggleCoupon}>
          {isCouponOpen ? '-' : '+'}
        </button>
        {isCouponOpen && (
            <div className={`coupon-input ${isCouponOpen ? 'slide-down' : ''}`}>
            <input type="text" placeholder="Enter coupon code" />
            <button className="apply-button">Apply</button>
          </div>
        )}
      </div>
        
        {/* Section 5: Total */}
        <div className="section total">
            <div className="row">
            <div className="label">Total</div>
            <div className="value">${totalCost}</div>
            </div>
        </div>

        {/* Final note section */}
        <div className="section-note">
          <p>PLEASE MAKE SURE YOUR ORDER IS CORRECT BEFORE PLACING IT.</p>
          <span>No changes can be made to your order after it is placed, including cancellations. Free Shipping and $4.99 flat rate shipping apply only to orders in the contiguous 48 United States.</span>
        </div>

     
    </div>
  );
};

export default CartOrderSummary;
