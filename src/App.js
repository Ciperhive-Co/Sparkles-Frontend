import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
<<<<<<< HEAD
=======
import clean from './cleancar.png';
import dirty from './dirty-car.png';
>>>>>>> fe2cb2852a30351bb0dbff09b17e6946275d9bf3
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Shop from './Components/Shop';
import BlogSection from './Components/BlogSection';
import ImageReel from './Components/ImageReel';
import Footer from './Components/Footer';
<<<<<<< HEAD
import ClickablePictures from './Components/ClickablePictures';
import {useState,useEffect} from "react";
import ComparisonSlider from './Components/ComparisonSlider';
=======
import ReactCompareImage from 'react-compare-image';
import ClickablePictures from './Components/ClickablePictures';
>>>>>>> fe2cb2852a30351bb0dbff09b17e6946275d9bf3

// export default App;
function App() {
  
  const [isLoading, setIsLoading] = useState(true);

<<<<<<< HEAD
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
  
=======
>>>>>>> fe2cb2852a30351bb0dbff09b17e6946275d9bf3
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
<<<<<<< HEAD
        <div className="Wrapper" style={{ minHeight: '200px' }}>
        <ComparisonSlider/>
        </div>
=======
      <div className="mainWrapper">
        <div className="Wrapper" style={{ minHeight: '200px' }}>
            <ReactCompareImage
              leftImage={clean}
              rightImage={dirty}
              sliderPositionPercentage="0.021"
              sliderLineWidth="3"
              sliderLineColor="#24245a"
              style={{
                paddingBottom: '1%',
                maxHeight: '20vh',
              }}
            />
        </div>
      </div>
>>>>>>> fe2cb2852a30351bb0dbff09b17e6946275d9bf3
      <BlogSection />
      <div className="instaHeading">@Sparkles.co</div>
      <ImageReel />
      <Footer />
    </div>
  );
}

export default App;
