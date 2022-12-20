import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Subtotal from "../../components/subtotal/Subtotal";
import { addToCart, getTotals } from "../../redux/cartSlice";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log("cartitems", cartItems);
  const cartTotal = useSelector((state) => state.cart.cartTotalAmount);
  
  const dispatch = useDispatch();

  return (
    <div>
      <div className="ad">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
      </div>

      <div className="checkout">
        <div className="checkout_left">
          <div className="titlexxx">
            <div className="title1">
              <p className="checkout__title">Shopping Carttt</p>
            </div>
            <div className="title2">
              <p className="checkout__title2">Price</p>
            </div>
          </div>

          {cartItems.map((item) => (
            <div className="item">
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                cartQuantity={item.cartQuantity}
              />
            </div>
          ))}
        </div>

        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
