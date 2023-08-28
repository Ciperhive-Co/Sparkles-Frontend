import React from "react";
import { useParams } from "react-router-dom";
import Filter from "./Filter.js";
import './CategoryPage.css';
import Navbar from "./Navbar.js";
import img1 from './claybarkit.webp';
import img2 from './claybarkit.webp';
import img3 from './claybarkit.webp';
import Bar from './bar';
import ProductCard from './productCard';
import Reviews from './Reviews.js'
import Footer from "./Footer.js";
import { useState, useEffect } from "react";


const CategoryPage = ({ categoryData, subcategoryContent }) => {
  const { categoryName } = useParams();
  const subheadings = categoryData[categoryName] || [];

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


  const products = [
    {
      title: 'Product 1',
      description: 'This is the description of the product',
      image: img1,
      oldprice: '$20.00',
      newprice: 'From $0.00',
    },
    {
      title: 'Product 2',
      description: 'This is the description of the product',
      image: img2,
      oldprice: '$10.00',
      newprice: 'From $0.00',
    },
    {
      title: 'Product 3',
      description: 'This is the description of the product',
      image: img3,
      oldprice: '$19.00',
      newprice: 'From $0.00',
    }
  ]

  return (
    <>
      <Navbar />
      <div className="category-display">
      <h5>Home /  {categoryName} </h5>
      </div>
      <div className="category-heading">
        <h1 className={`main-category ${categoryName !== null ? 'active' : ''}`}>
          {categoryName}
        </h1>
      </div>

      <div className="category-page-container">
      <div className="filter-container">
        <Filter subcategoryContent={categoryName} subheadingContent={subheadings} />
      </div>

      <div className="Bar-container">  
        <Bar count="9" />
        <div className="additional-content">
        <div className="d-flexCC">
        <ProductCard discription='Product 1' price='10' stars='3' NoOfReviews='3' img = {img1} status='soldout'/>
        <ProductCard discription='Product 2' price='10' stars='5' NoOfReviews='7' img = {img1} status='bestselling'/>
        <ProductCard discription='Product 3' price='10' stars='1' NoOfReviews='27' img = {img1} status='none'/>
        <ProductCard discription='Product 4' price='10' stars='4' NoOfReviews='47' img = {img1} status='none'/>
        <ProductCard discription='Product 5' price='10' stars='5' NoOfReviews='17' img = {img1} status='none'/>
        <ProductCard discription='Product 6' price='10' stars='2' NoOfReviews='27' img = {img1} status='none'/>
        <ProductCard discription='Product 7' price='10' stars='1' NoOfReviews='47' img = {img1} status='none'/>
        <ProductCard discription='Product 8' price='10' stars='2' NoOfReviews='157' img = {img1} status='bestselling'/>
        <ProductCard discription='Product 9' price='10' stars='3' NoOfReviews='234' img = {img1} status='soldout'/>
        </div>
        </div>
      </div>
      </div>
      

      <div className="descriptionCP-wrapper">
      <div className="descriptionCP">
        <p>
        Ethos Car Care supplies premium Car Cleaning Products that provide the best cleaning experience available. We manufacture innovative cleaners that quickly and safely deep clean your wheels, tires, trim, engine bay and exterior surfaces. Our Super APC and Interior Detailer go to work to clean and protect all interior surfaces such as leather, plastics, vinyl and fabric. Ethos is your one stop shop for all of your car Cleaning Supply needs.
        </p>
      </div>
      </div>

      <div className="RecentlyViewed">
        <div className="RV-headingWrapper">
            <h1 className="RV-heading">
            Recently Viewed
            </h1>
            <div className="d-flexRW">
            {products.map((product, index) => (
            <div key={index} className="product-cardRW">
            <div className="card-body">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <h4 className="card-title">{product.title}</h4>
              <p className="card-description">{product.description}</p>
              <div className="price">
                <p className="newprice">{product.newprice}</p>
                <p className="oldprice">{product.oldprice}</p>
              </div>
            </div>
          </div>
          
        ))}
      </div>
        </div>
      </div>
      <div>
        <Reviews />
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;