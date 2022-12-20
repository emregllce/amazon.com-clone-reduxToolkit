import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetail.css";
import { useDispatch, useSelector } from "react-redux"
import { addToCart, getTotals } from "../../redux/cartSlice";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state.item;
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.cart)


  const handleAddToCart = () => {
    dispatch(addToCart({product, qty}))
  };

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])
  

  const handleQty = (e) => {
    setQty(parseInt(e.target.value));
  }

  return (
    <div className="main">
      <div className="ad">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
      </div>
      <div className="detailContainer">
        <div className="product-image">
          <img className="image" src={product.image} alt="" />
        </div>
        <div className="product-description">
          <div className="description-top">
            <h5>{product.title}</h5>
            <br />
            <div className="ppp">
              <div className="rating">
                {Array(product.rating)
                  .fill()
                  .map((_, index) => (
                    <p key={index}>⭐</p>
                  ))}
              </div>
              <div className="rating-count">
                <p>10 customer review | 20 Ratings</p>
              </div>
            </div>
          </div>
          <div className="discription-center">
            <h5>{product.price}$</h5>
            <p>(${product.price})</p>
          </div>
          <div className="discription-bottom">
            <h3>About this item</h3>
            <p>{product.specification}</p>
          </div>
        </div>
        <div className="cart-details">
          <div className="cart-details-up">
            <h5>{product.price}$</h5>
          </div>
          <div className="cart-details-center">
            <p className="inStock">In Stock</p>
            <br />
            <div className="select-part">
              <label style={{ fontSize: "14px", fontFamily:"Arial" }}>Qty:</label>
              <select name="qty-select" id="qty-select" onChange={handleQty}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <button onClick={()=>handleAddToCart(product,qty)} className="button addCart">
                Add to Cart
              </button>
              <button className="button buyNow">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
