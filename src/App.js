import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import clean from './cleancar.png';
import dirty from './dirty-car.png';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Shop from './Components/Shop';
import BlogSection from './Components/BlogSection';
import ImageReel from './Components/ImageReel';
import Footer from './Components/Footer';
import ReactCompareImage from 'react-compare-image';
import ClickablePictures from './Components/ClickablePictures';
import {useState,useEffect} from "react";
import ComparisonSlider from './Components/ComparisonSlider';

// export default App;
function App() {

  const [sliderPosition, setSliderPosition] = useState(0.2);
  
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
  
  return (
    <div className="App">
      <div id="promotion" className="promotional-bar">
        <div className="promotional-content">
          <p>Get 10% off on all products. Use code: PROMO10</p>
        </div>
      </div>
      <Navbar />
      <Slider />
      <Shop />
      <ClickablePictures />
        <div className="Wrapper" style={{ minHeight: '200px' }}>
        <ComparisonSlider/>
        </div>
      <BlogSection />
      <div className="instaHeading">@Sparkles.co</div>
      <ImageReel />
      <Footer />
    </div>
  );
}

export default App;
