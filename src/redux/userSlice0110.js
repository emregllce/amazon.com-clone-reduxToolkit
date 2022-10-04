import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../helpers/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const initialState = {
  currentUser: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    activeUser(state, action) {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          state.currentUser = currentUser;
          console.log(state.currentUser.displayName);
        } else {
          state.currentUser = "";
        }
      });
      console.log("current", state.currentUser);
      console.log(`auth.currentUser`, auth.currentUser);
    },

    login(state, action) {
      try {
        signInWithEmailAndPassword(
          auth,
          action.payload.email,
          action.payload.password
        )
        .then((currentUser)=>{
          return(
          state.currentUser = currentUser
          )
        }
        )
        
      } catch (error) {
        console.log(`error.message`, error.message);
      }



      
    },

    setuser(state,action){
      state.currentUser = action.payload
    },  

    logout() {
      signOut(auth);
    },
    register(state, action){
      createUserWithEmailAndPassword(
          auth,
          action.payload.email,
          action.payload.password
        )
        updateProfile(auth.currentUser, {
          displayName: action.payload.name,
          });
        state.currentUser = auth.currentUser
            
       
      
    },
  },
});

export const { login, logout, register } = userSlice.actions;

export default userSlice.reducer;
