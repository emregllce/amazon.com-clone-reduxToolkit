import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
  child,
} from "firebase/database";
import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyC1lrpNS4RsIShLgBlaz6Mxf16v4LpSzBE",
  authDomain: "clone-c13ea.firebaseapp.com",
  projectId: "clone-c13ea",
  storageBucket: "clone-c13ea.appspot.com",
  messagingSenderId: "305054075130",
  appId: "1:305054075130:web:41105ae8e403c89c5ca143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// export const createUser = async (email, password, name) => {
//   try {
//     await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
    // await updateProfile(auth.currentUser, {
    //   displayName: name,
    // });
    // console.log(userCredential);
   // navigate("/");
//   } catch (err) {
//     alert(err.message);
//   }
// };

// export const signInUser = async (email, password, navigate) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//     navigate("/");
//   } catch (err) {
//     alert("Please log in with a current username");
//   }
// };

export const userObserver = (setcurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setcurrentUser(currentUser);
      console.log("fireda", currentUser);
    } else {
      setcurrentUser(false);
    }
  });
};

// export const logOut = async (navigate) => {
//   await signOut(auth);
//   navigate("/");

// };
