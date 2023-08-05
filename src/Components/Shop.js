import React, { useState } from 'react';
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
          image: './assets/graphene.webp',
          price: '$20.00',
        },
        {
          title: 'Product 2',
          image: './assets/graphene.webp',
          price: '$10.00',
        },
        {
          title: 'Product 3',
          image: './assets/graphene.webp',
          price: '$19.00',
        },
        {
          title: 'Product 4',
          image: './assets/graphene.webp',
          price: '$17.00',
        },
      ],
    },
    {
      name: 'NEW RELEASES',
      products: [
        {
          title: 'Product 1',
          image: './assets/claybarkit.webp',
          price: '$20.00',
        },
        {
          title: 'Product 2',
          image: './assets/claybarkit.webp',
          price: '$10.00',
        },
        {
          title: 'Product 3',
          image: './assets/claybarkit.webp',
          price: '$19.00',
        },
        {
          title: 'Product 4',
          image: './assets/claybarkit.webp',
          price: '$17.00',
        },
      ],
    },
    {
      name: 'ACCESSORIES',
      products: [
        {
          title: 'Product 1',
          image: './assets/cleaningbrush.webp',
          price: '$20.00',
        },
        {
          title: 'Product 2',
          image: './assets/cleaningbrush.webp',
          price: '$10.00',
        },
        {
          title: 'Product 3',
          image: './assets/cleaningbrush.webp',
          price: '$19.00',
        },
        {
          title: 'Product 4',
          image: './assets/cleaningbrush.webp',
          price: '$17.00',
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  
  return (
    <>
      <div className="shop-heading">
        <h1>SHOP</h1>
      </div>
      
      <div className="categories">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="d-flex">
        {selectedCategory.products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="card-body">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.price}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};