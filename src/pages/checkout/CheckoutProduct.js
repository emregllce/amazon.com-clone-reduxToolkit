import React, { useEffect, useState } from "react";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, title, price, rating, cartQuantity }) => {
  const [qty, setQty] = useState(0);

  const removeFromBasket = () => {
    // dispatch({
    //     type:"REMOVE_FROM_BASKET",
    //     id:id
    // })
  };


  const handleQty = (e) => {
    setQty(e.target.value);
    cartQuantity = qty;
    console.log(qty, cartQuantity);
  };

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <div className="select-part">
          <label style={{ fontSize: "12px", fontFamily: "Arial" }}>Qty:</label>
            <select
              name="qty-select"
              id="qty-select"
              defaultValue={cartQuantity}
              // onSubmit={handleQty}
              onChange={handleQty}
            >
              <option value="">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
