import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {useState,useEffect} from "react";
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from './Components/CategoryPage';
import ProductPage from './Components/ProductPage';

// export default App;
function App() {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    //MAKE IT ASYNC AND LOAD YOUR DATA HERE//

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="Logo" className="logo" />
        <div className="spinner"></div>
      </div>
    );
  }

  const categoryData = {
    "Exterior Care": ['New Releases', 'Bundles', 'Shampoes', 'Accessories'],
    "Interior Care": ['New Releases', 'Interior Cleaner', 'Microfiber','Accessories'],
    "Accessories":  ['Bundles','Towels','Clothes','PAD','Mits & Sponges'],
    "Lubricants": ['Bike Engine','Car Engine','Gear Oil','Break Oil','Radiator Coolent','Battery Water'],
    "Filters":  ['Air Filter','Oil Filter','AC Filter']
  };
  
  return (
    <Router>
    <div className="App">
      <div id="promotion" className="promotional-bar">
        <div className="promotional-content">
          <p>Get 10% off on all products. Use code: PROMO10</p>
        </div>
      </div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<CategoryPage categoryData={categoryData} />} />
        <Route path="/products/:productName" element={<ProductPage/>} />
      </Routes>
    </div>
    </Router>
  );
}
export default App;
