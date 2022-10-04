import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../helpers/firebase"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    onAuthStateChanged
  } from "firebase/auth";
  import { Navigate, useNavigate } from 'react-router-dom'


const initialState = {
    loggedIn: false,
    currentUser:"",
}

// export const fetchUser = createAsyncThunk("register", async (auth, name, email, password)=>{
//     const userCredential = await createUserWithEmailAndPassword(auth,email,password);
//                             await updateProfile(auth.currentUser, {
//                             displayName: name,
//                         });
// })


export const userSlice = createSlice({
    
    name:"user",
    initialState,
    reducers: {

        activeUser(state,action){
            onAuthStateChanged(auth, (currentUser)=>{
                if(state.currentUser){
                    state.currentUser = state.currentUser
                    console.log(state.currentUser.displayName);
                }else{
                     state.currentUser = ""
                }

            })
            console.log("current", state.currentUser);
            console.log(`auth.currentUser`, auth.currentUser);
            
        },


        login(state,action){
            try {
                signInWithEmailAndPassword(auth, action.payload.email, action.payload.password)
                
                .then(()=>
                action.payload.navigate("/"),
                
                )
                console.log(`action`, action);
                console.log(`state`, state);
                console.log(auth.currentUser);
                
            } catch (error) {
                alert(error.message)
            }
        },
        logout(){
            signOut(auth)
        },
        register(state,action){
            try{
            createUserWithEmailAndPassword(auth, action.payload.email, action.payload.password)
            updateProfile(auth.currentUser,{
                displayName: action.payload.name,
                // email: action.payload.email
            })
            .then(()=>{
                action.payload.navigate("/")
                state.currentUser = auth.currentUser
                console.log(`auth.currentUser`, auth.currentUser);
                console.log(`state.currentUser`, state.currentUser);

            })
            }catch(err){
                alert(err.message)
            }

        },
       
    }
})

export const { login, logout, register} = userSlice.actions

export default userSlice.reducer