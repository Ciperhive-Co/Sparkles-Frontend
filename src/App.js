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

// function App() {
//   return (
//     <div className="App">
//       <div id="promotion" className="promotional-bar">
//         <div className="promotional-content">
//           <p>Get 10% off on all products. Use code: PROMO10</p>
//         </div>
//       </div>
//       <Navbar />
//       <Slider />
//       <Shop />
//       <ClickablePictures />
//       {/* Adjust the styles for mainWrapper */}
//       <div className="mainWrapper" style={{ width: '80%', margin: '0 auto' }}>
//         <div className="contentWrapper">
//           <div style={{ position: 'relative' }}>
//             <ReactCompareImage
//               leftImage={clean}
//               rightImage={dirty}
//               sliderPositionPercentage="0.021"
//               sliderLineWidth="1"
//               sliderLineColor="#24245a"
//               sliderHandleWidth="20px" // Adjust this value for the handle width
//               leftImageCss={{
//                 paddingBottom: '1%',
//                 maxWidth: '100%', // Adjust this value for the maximum width
//               }}
//               sliderWrapperCss={{
//                 marginTop: '2px',
//                 maxHeight: '4px', // Adjust this value for the slider line height
//                 overflow: 'hidden', // Hide any overflow
//               }}
//             />
//           </div>
//         </div>
//       </div>
//       <BlogSection />
//       <div className="instaHeading">@ETHOSCARCARE</div>
//       <ImageReel />
//       <Footer />
//     </div>
//   );
// }

// export default App;
function App() {

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
      <BlogSection />
      <div className="instaHeading">@Sparkles.co</div>
      <ImageReel />
      <Footer />
    </div>
  );
}

export default App;
