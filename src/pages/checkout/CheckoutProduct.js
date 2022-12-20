import React, { useEffect, useState } from "react";
import "./CheckoutProduct.css";
import { useDispatch, useSelector } from "react-redux"
import { addToCartCOP, reduceCard, getTotals, removeItem } from "../../redux/cartSlice";

const CheckoutProduct = ({ id, image, title, price, rating, cartQuantity }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.cart)


  const handleDelete = (e) => {
    dispatch(removeItem({id}))
  };
  
  useEffect(() => {
    dispatch(getTotals())
  }, [cart])

  const handleQty = (e) => {

    if (e.target.value > cartQuantity) {
      let additionCOP = e.target.value - cartQuantity
      dispatch(addToCartCOP({additionCOP, id}))
    } else {
      let reduceCOP = cartQuantity - e.target.value
      dispatch(reduceCard({reduceCOP, id}))
    }
    
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
            // defaultValue={cartQuantity}
            onChange={handleQty}
            value={cartQuantity}
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
