import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './pages/checkout/Checkout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProductDetail from './pages/productDetail/ProductDetail';
import { useDispatch, useSelector } from "react-redux";
import { activeUser, checkUserSignIn } from "./redux/userSlice"
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './helpers/firebase';
import Footer from './components/footer/Footer';
import React from "react"


const App = () => {

const dispatch = useDispatch()

onAuthStateChanged(auth,(currentUser)=>{
  if (currentUser) {
    dispatch(activeUser(currentUser))
  } else {
    dispatch(activeUser())
    
  }
})

  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={
        <>
        <Header />
        <Home />
        </>
        } />
        <Route path = "/checkout" element={
        <>
        <Header />
        < Checkout />
        </>
        } />
        <Route path = "/productdetail/:id" element={
        <>
        <Header />
        <ProductDetail />
        </>
        } />
        <Route path = "/login" element={
        <>
        < Login />
        < Footer />
        </>
        } />
        <Route path = "/register" element={
        <>
        < Register />
        < Footer />
        </>
        } />
        

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
