import React from "react";
import { useSelector , useDispatch} from "react-redux";
import Subtotal from "../../components/subtotal/Subtotal";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("cartitems", cartItems);
  const cartTotal = useSelector((state)=>state.cart.cartTotalAmount);

  const dispatch = useDispatch()



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
          <p className="checkout__title">
            Shopping Cart 
          </p>

          {cartItems.map((item)=>
            <div className="item">
            <input className="checkbox" type="checkbox" />
            <CheckoutProduct 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            cartQuantity={item.cartQuantity}
            />
            </div>
          )}


        </div>

        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
