import React, { useState } from 'react';
import './ViewItem.css'; // Import your CSS file for styling

const ViewItem = ({ productData }) => {
  const { images, name, ratings, price, productCode, sizes, stockStatus } = productData;

  // State to keep track of the selected image
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleSizeClick = (size) => {
    // Handle size click logic here (e.g., update state)
    console.log(`Selected size: ${size}`);
  };

  return (
    <div className="product-viewer">
      <div className="image-column">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index}`}
            className={selectedImage === image ? 'selected' : ''}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <div className="product-details">
        <div className="big-image-container">
          <img src={selectedImage} alt="Selected Product" className="big-image" />
        </div>
      </div>
      <div className="detailsVI">
        <h2>{name}</h2>
        <div className="ratingsVI">
          {/* Display stars and total reviews */}
          <span className="stars">★★★★★</span>
          <span className="total-reviews">{ratings.reviews} reviews</span>
        </div>
        <div className="price">
          <p className="sale-price">${price.sale}</p>
          <p className="old-price">${price.old}</p>
          <p className="discount-tag">{price.discount}% off</p>
        </div>
        <p className="product-code">SKU: {productCode}</p>
        <div className="sizes">
          {sizes.map((size, index) => (
            <div key={index} className="size" onClick={() => handleSizeClick(size.name)}>
              <p>{size.name}</p>
              <img src={size.image} alt={size.name} />
            </div>
          ))}
        </div>
        <p className="stock-status">{stockStatus}</p>
        <button id='addtocart'>Add to Cart</button>
      </div>
    </div>
  );
};

export default ViewItem;
