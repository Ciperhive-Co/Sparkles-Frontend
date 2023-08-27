import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Reviews.css'; // Import your CSS file for styling
import img from './productA.webp';

const reviewsData = [
  {
    id: 1,
    author: 'John Doe',
    rating: 5,
    date: '26/08/2023',
    title: 'Works Great',
    product: 'Product A',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: img,
  },
  {
    id: 2,
    author: 'John Doe',
    rating: 3,
    date: '26/08/2023',
    title: 'Decent',
    product: 'Product B',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: img,
  },
  {
    id: 3,
    author: 'John Doe',
    rating: 2,
    date: '26/08/2023',
    title: 'Bad',
    product: 'Product C',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: img,
  },
  {
    id: 4,
    author: 'John Doe',
    rating: 4,
    date: '26/08/2023',
    title: 'Good',
    product: 'Product D',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: img,
  },
];

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [fadeAnimation, setFadeAnimation] = useState(false);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    setFadeAnimation(true); 
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
    setFadeAnimation(true); 
  };
    return (
      <div className="review-slider">
        <div className="slider-controls">
          <div className="slider-heading">Real Reviews from Real Customers</div>
          <div className="total-reviews">{`${reviewsData.length} Reviews`}</div>
          <div className="navigation">
            <FontAwesomeIcon icon={faChevronLeft} onClick={prevReview} />
            <FontAwesomeIcon icon={faChevronRight} onClick={nextReview} />
          </div>
        </div>
        <div
          className="slider-content"
          style={{ "--current-index": currentReviewIndex }}
        >
          {reviewsData.slice(currentReviewIndex, currentReviewIndex + 3).map((review, index) => (
            <div
            key={review.id}
            className={`review-card ${fadeAnimation ? "fadein" : ""}`}
            >
              <div className="review-header">
                <div className="rating">{Array(review.rating).fill('★')}</div>
                <div className="date">{review.date}</div>
              </div>
              <div>
                <h3 className="product-title">{review.title}</h3>
              </div>
              <div className="product-info">
                <img src={review.image} className="product-image" alt={review.product} />
                <div className="product-details">
                  <p className="review-text">{review.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Reviews;
