import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import './Shop.css';

export default function Shop() {
  const categories = [
    {
      name: 'BEST SELLERS',
      products: [ 
        {
          title: 'Product 1',
          description: 'This is the description of the product',
          image: './assets/graphene.webp',
          oldprice: '$20.00',
          newprice: 'From $0.00',
        },
        {
          title: 'Product 2',
          description: 'This is the description of the product',
          image: './assets/graphene.webp',
          oldprice: '$10.00',
          newprice: 'From $0.00',
        },
        {
          title: 'Product 3',
          description: 'This is the description of the product',
          image: './assets/graphene.webp',
          oldprice: '$19.00',
          newprice: 'From $0.00',
        },
        {
          title: 'Product 4',
          description: 'This is the description of the product',
          image: './assets/graphene.webp',
          oldprice: '$17.00',
          newprice: 'From $0.00',
        },
      ],
    },
    {
      name: 'NEW RELEASES',
      products: [
        {
          title: 'Product 1',
          description: 'This is the description of the product',
          image: './assets/claybarkit.webp',
          oldprice: '$20.00',
          newprice: 'From $0.00',
        },
        {
          title: 'Product 2',
          description: 'This is the description of the product',
          image: './assets/claybarkit.webp',
          oldprice: '$10.00',
          newprice: 'From $0.00',
        },
        {
          title: 'Product 3',
          description: 'This is the description of the product',
          image: './assets/claybarkit.webp',
          oldprice: '$19.00',
          newprice: 'From $0.00',
        },
        {
          title: 'Product 4',
          description: 'This is the description of the product',
          image: './assets/claybarkit.webp',
          oldprice: '$17.00',
          newprice: 'From $0.00',
        },
      ],
    },
    {
      name: 'ACCESSORIES',
      products: [
        {
          title: 'Product 1',
          description: 'This is the description of the product',
          image: './assets/cleaningbrush.webp',
          oldprice: '$20.00',
          newprice: 'From $0.00',
        },
        {
          title: 'Product 2',
          description: 'This is the description of the product',
          image: './assets/cleaningbrush.webp',
          oldprice: '$10.00',
          newprice: 'From $0.00',
        },
        {
          title: 'Product 3',
          description: 'This is the description of the product',
          image: './assets/cleaningbrush.webp',
          oldprice: '$19.00',
          newprice: 'From $0.00',
        },
        {
          title: 'Product 4',
          description: 'This is the description of the product',
          image: './assets/cleaningbrush.webp',
          oldprice: '$17.00',
          newprice: 'From $0.00',
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger the fade-in animation when the component mounts
  }, [selectedCategory]);

  const handleClick = (category, index) => {
    setSelectedCategory(category);
    setActiveButtonIndex(index);
    setFadeIn(false); // Reset fade-in state to trigger animation when changing categories
    setTimeout(() => {
      setFadeIn(true); // Set fade-in state after a short delay to trigger animation
    }, 100);
  };

  return (
    <>
      <div className="shop-heading">
        <h1>SHOP</h1>
      </div>

      <div className="categories">
        {categories.map((category, index) => {
          const buttonClass = `category-button ${index === activeButtonIndex ? 'active' : ''}`;
          return (
            <button
              key={index}
              className={buttonClass}
              onClick={() => handleClick(category, index)}
            >
              {category.name}
              <div className="category-line"></div>
            </button>
          );
        })}
      </div>

      <div className="d-flex">
        {selectedCategory.products.map((product, index) => (
          <div
            key={index}
            className={`product-card ${fadeIn ? 'fade-in' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-body">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <h4 className="card-title">{product.title}</h4>
              <p className="card-description">{product.description}</p>
              <div className="price">
                <p className="newprice">{product.newprice}</p>
                <p className="oldprice">{product.oldprice}</p>
              </div>
<<<<<<< HEAD
=======
              <a href="/" className="btn btn-primary">
                Shop Now
              </a>
>>>>>>> 822153f72f00b6dd22cc05775d74d7032cb45704
            </div>
          </div>
        ))}
      </div>
    </>
  );
}