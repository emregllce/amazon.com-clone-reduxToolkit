import React, { useState } from "react";
import "./Home.css";
import { headerItems, products } from "../../helpers/utils/ProductsData";
import Product from "../product/Product";
import Banner1 from "../../helpers/BannerImages/Banner1.jpg";
import Banner2 from "../../helpers/BannerImages/Banner2.jpg";
import Banner3 from "../../helpers/BannerImages/Banner3.jpg";
import Banner4 from "../../helpers/BannerImages/Banner4.jpg";
import Banner5 from "../../helpers/BannerImages/Banner5.jpg";
import Slider from "../../components/slider/Slider"
import { Link, useNavigate, useParams } from "react-router-dom";


const Home = () => {
  const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5];
  const navigate = useNavigate()
  const params = useParams()
  // const handleDetail = (id) => {
  //   navigate(`/productdetail/${params.id}`, {state: {product}})
  // }

  return (
    <div className="body">
   
      <div className="home">
        <div className="home_container">
          <div className="slider_container">
          <Slider images={bannerImages} />
          </div>
          <div className="home-row">
            {products.slice(0, 4).map((item) => (
        
              <div className="home-row" onClick={()=>navigate(`productdetail/${item.id}`, { state : { item }})} key={item.id}>
              <Product
                
                
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
              </div>
            ))}
          </div>
          <div className="home-row">
            {products.slice(4, 6).map((item) => (
              <div className="home-row" onClick={()=>navigate(`productdetail/${item.id}`, { state : { item }})} key={item.id}>
              <Product
                
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
              </div>
            ))}
          </div>
          <div className="home-row">
            {products.slice(6, 9).map((item) => (
              <div className="home-row" onClick={()=>navigate(`productdetail/${item.id}`, { state : { item }})} key={item.id}>
              <Product
                
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
              </div>
            ))}
          </div>
          <div className="home-row">
            {products.slice(9, 12).map((item) => (
              <div className="home-row" onClick={()=>navigate(`productdetail/${item.id}`, { state : { item }})} key={item.id}>
              <Product
                
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
              </div>
            ))}
          </div>
          <div className="home-row">
            {products.slice(12, 13).map((item) => (
              <div className="home-row" onClick={()=>navigate(`productdetail/${item.id}`, { state : { item }})} key={item.id}>
              <Product
                
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
              </div>
            ))}
          </div>
          <div className="home-row">
            {products.slice(13, 14).map((item) => (
              <div className="home-row" onClick={()=>navigate(`productdetail/${item.id}`, { state : { item }})}  key={item.id}>
              <Product
               
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
