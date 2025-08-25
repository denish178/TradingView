import React from "react";
import "./RightSection.css"; // Import the corresponding CSS file

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container right-section-container my-5">
      <div className="row align-items-center">
        {/* Left Column: Product Details */}
        <div className="col-md-6">
          <div className="product-details">
            <h1>{productName}</h1>
            <p>{productDesription}</p>
            <div>
              <a href={learnMore} className="learn-more-link">
                Learn More <i className="fa fa-long-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Right Column: Product Image */}
        <div className="col-md-6 text-center">
          <img src={imageURL} alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
