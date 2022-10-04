import React from "react";
import "./Subtotal.css";
import { useSelector } from "react-redux";


const Subtotal = () => {

const cartTotalQuantity = useSelector((state)=>state.cart.cartTotalQuantity)
const cartTotalAmount = useSelector((state)=>state.cart.cartTotalAmount)


  return (
    <div className="subtotal">
      <div className="first-line">
        <p>
          Subtotal ({cartTotalQuantity} items): <strong>${cartTotalAmount}</strong>
        </p>
      </div>
      <div className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </div>
      <div>
        <button className="button-proceed">Proceed to checkout</button>
      </div>

    </div>
  );
};

export default Subtotal;

// return (
//     <div className="subtotal">
//       <CurrencyFormat
//         renderText={(value) => (
//           <>
//             <p>
//               {/* Part of the homework */}
//               Subtotal ({basket.length} items): <strong>{value}</strong>
//             </p>
//             <small className="subtotal__gift">
//               <input type="checkbox" /> This order contains a gift
//             </small>
//           </>
//         )}
//         decimalScale={2}
//         value={getBasketTotal(basket)} // Part of the homework
//         displayType={"text"}
//         thousandSeparator={true}
//         prefix={"$"}
//       />

//       <button>Proceed to Checkout</button>
//     </div>
//   );
