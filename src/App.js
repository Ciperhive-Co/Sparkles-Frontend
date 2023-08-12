import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import clean from './clean-car.png'
import dirty from './dirty-car.png'
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Shop from './Components/Shop';
import BlogSection from './Components/BlogSection';
import ImageReel from './Components/ImageReel';
import Footer from './Components/Footer';
import ReactCompareImage from "react-compare-image";
import ClickablePictures from "./Components/ClickablePictures";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

function App() {


  return (

    
    <div className="App">
        <div id='promotion' className="promotional-bar">
          <div className="promotional-content">
            <p>Get 10% off on all products. Use code: PROMO10</p>
          </div>
        </div>
      <Navbar />
      <Slider/>
      <Shop/>
      <ClickablePictures/>
      <div className='mainWrapper'>
      <div className='contentWrapper'>
      <ReactCompareImage leftImage= {clean} rightImage={dirty} sliderPositionPercentage = '0.021' sliderLineWidth = '1' sliderLineColor = '#24245a' leftImageCss = {{paddingBottom: '16.3%'}}/>
      </div>
      </div>
      <BlogSection/>
      <div className='instaHeading'>@ETHOSCARCARE</div>
      <ImageReel/>
      <Footer/>
    </div>
  );
}

export default App;
