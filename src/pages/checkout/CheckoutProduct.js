import React, { useEffect, useState } from "react";
import "./CheckoutProduct.css";
import { useDispatch, useSelector } from "react-redux"

const CheckoutProduct = ({ id, image, title, price, rating, cartQuantity }) => {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id
    })
  };

  const handleQty = (e) => {
    setQty(e.target.value);
    cartQuantity = qty;
    console.log(qty, cartQuantity);
  };

  const emptyClick = () => {};

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <div className="productTitle">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="checkbox">
          <input type="checkbox" />
          <label className="label">
            This is a gift{" "}
            <span className="labelSpan" onClick={emptyClick}>
              Learn more
            </span>
          </label>
        </div>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <div className="select-part-below">
          <div className="select-part">
          <label style={{ fontSize: "14px", fontFamily: "Arial" }}>Qty:</label>
          <select
            name="qty-select"
            id="qty-select"
            defaultValue={cartQuantity}
            // onSubmit={handleQty}
            onChange={handleQty}
            className="xxx"
          >
            <option value="">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          </div>
          <span className="labelSpan2" onClick={handleDelete}>
            Delete 
            </span>
            <span className="labelSpan2" onClick={emptyClick}>
              Save for later 
            </span>
            <span className="labelSpan2" onClick={emptyClick}>
              Compare with similar items
            </span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
