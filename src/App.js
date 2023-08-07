import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Shop from './Components/Shop';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


function App() {
  const [isPromotionalClosed, setIsPromotionalClosed] = useState(false);

  const closePromotionalBar = () => {
    setIsPromotionalClosed(true);
  };

  return (
    <div className="App">
      {!isPromotionalClosed && (
        <div className="promotional-bar">

          <div className="promotional-content">
            <p>Get 10% off on all products. Use code: PROMO10</p>
          </div>

          <div className="close-btn">
          <span onClick={closePromotionalBar}>&times;</span>
          </div>
        </div>
      )}
      <Navbar />
      <Slider/>
      <Shop/>
    </div>
  );
}

export default App;
