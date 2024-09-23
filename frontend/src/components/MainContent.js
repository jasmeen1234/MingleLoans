import React from 'react';
import './MainContent.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MainContent = () => {
  const reviews = [
    { id: 1, text: "MingleLoans made my loan process quick and easy!" },
    { id: 2, text: "Best loan provider with amazing customer service!" },
    { id: 3, text: "Got approved in minutes, hassle-free experience." },
    // Add more reviews as needed
  ];

  return (
    <div className="main-content">
      <h1>We Have the Best Deals on Loans</h1>
      <p className="subtitle">
        Unlock your dreams today! Whether it's upgrading your home or covering unexpected expenses, 
        our tailored personal loan for working professionals offers competitive rates and flexible repayment terms.
      </p>
      <p className="cta-text">Apply now and get pre-approved in minutes!</p>
      
      <div className="ratings">
        <span className="rating-text">4.96/5</span>
        <span className="review-count">(99+ reviews)</span>
      </div>

      <button className="apply-btn">Apply Now</button>

      {/* Carousel for reviews */}
      <div className="carousel-section">
        <Carousel 
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          slidesToSlide={1}
          swipeable
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          }}
        >
          {reviews.map((review) => (
            <div key={review.id} className="review-item">
              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MainContent;
