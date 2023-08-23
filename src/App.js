import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar';
import {useState,useEffect} from "react";
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from './Components/CategoryPage';


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
        <img src="./assets/logo.png" alt="Logo" className="logo" />
        <div className="spinner"></div>
      </div>
    );
  }

  const categoryData = {
    Kit: ["New Releases", "Best Selling"],
    Accessories: ["New Releases", "Best Selling"],
    "Wash & Dry":  ["New Releases", "Best Selling"],
    "Soaps & Cleaners": ["New Releases", "Best Selling"],
    "Exterior Care":  ["New Releases", "Best Selling"],
    "Interior Care":  ["New Releases", "Best Selling"],
    "Lubricants & Filters":  ["New Releases", "Best Selling"],
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
      </Routes>
    </div>
    </Router>
  );
}
export default App;
