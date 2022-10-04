import React from "react";
import "./Product.css";

const Product = ({
  id,
  title,
  image,
  price,
  rating,
  specification,
  detail,
}) => {

  return (
    <div className="product">
      <div className="info" >
        <div className="title">
          <p>{title}</p>
        </div>
        <p className="price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
    </div>
  );
};

export default Product;
