import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
//   cartItems: localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [],

  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
        );
        if (itemIndex >= 0) {
          state.cartItems[itemIndex].cartQuantity += 1;
          console.log(`action`, action.payload);
        } else {
          const tempProducts = { ...action.payload, cartQuantity: 1 };
          state.cartItems.push(tempProducts);
          console.log(`action`, action.payload);
          console.log(`actionid`, action.payload.id);
      }
    //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    reduceCard(state,action){
        const currentCart = state.cartItems.find(item=>item.id===action.payload.id)
        currentCart.cartQuantity -= 1
        let cartWithoutCurrent = state.cartItems.filter(item=> item.id!==action.payload.id)
        if (currentCart.cartQuantity ===0){
            state.cartItems = [...cartWithoutCurrent]
        }else{
            state.cartItems = [...cartWithoutCurrent, currentCart]
        }
        // localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    getTotals(state,action){
        let {total, quantity}=state.cartItems.reduce((cartTotal, cartItem)=>{
            const {price,cartQuantity}=cartItem;
            const itemTotal = price*cartQuantity;
            
            cartTotal.total += itemTotal
            cartTotal.quantity += cartQuantity;
            
            return cartTotal
        },
        {
            total:0,
            quantity:0
        }
            
            );
            state.cartTotalQuantity= quantity
            state.cartTotalAmount = total;
        },
    // resetCart(state,action){
    //         state.cartItems = []
    //         // localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    // }
    removeItem(state,action){
        state.cartItems.map((cartItem)=>{
            if(cartItem.id===action.payload.id){
                const nextCartItems = state.cartItems.filter((item)=>item.id!==cartItem.id)
                state.cartItems = nextCartItems;
                // localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
                return state;
            }
        })
    }
  },
});

export const { addToCart, getTotals, removeItem, reduceCard} = cartSlice.actions
export default cartSlice.reducer;
