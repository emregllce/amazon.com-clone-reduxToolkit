import React, { useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate } from "react-router-dom";
import { headerItems } from "../../helpers/utils/ProductsData";
// import { logOut } from "../../helpers/firebase";
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/userSlice";




const Header = () => {
const navigate = useNavigate()
const cartTotalQuantity = useSelector((state)=>state.cart.cartTotalQuantity)
const {currentUser} = useSelector((state)=>state.user)
const dispatch = useDispatch()

const handleSignIn = () => {
    navigate("/login")
  }

const handleSignOut = () => {
  dispatch(logout())
}

  return (
    <div className="header-completed">
      <div className="header">
        <Link to="/">
          <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
        <div className="header_location" style={{ marginRight: "-10px" }}>
          <LocationOnOutlinedIcon
            style={{ height: "20px", marginTop: "5px" }}
          />
        </div>
        { currentUser ?
        (<div className="header_location">
           <span className="header_location1">Deliver to {currentUser?.displayName.split(" ",1)}
           </span>
          <span className="header_location2">NewYork 10087</span> 
        </div>)
        :
        (<div className="header_location">
          <span className="header_location1">Hello</span>
          <span className="header_location2">Select your address</span>
        </div>)
        }

        <div className="header_search">
          <select className="header_select">
            <option>All</option>
          </select>
          <input className="header_searchInput" type="text" />
          <SearchIcon className="header_searchIcon" />
        </div>

        <div className="header_nav">
          {currentUser ?
          (<div className="header_option">
            <span className="header_optionLineOne">Hello {currentUser?.displayName.toUpperCase().split(" ",1)}</span>
            <span onClick={handleSignOut} className="header_optionLineTwo">Sign Out</span>
          </div>)
          :
          (<div onClick={handleSignIn} className="header_option">
            <span className="header_optionLineOne">Hello, sign in</span>
            <span className="header_optionLineTwo">Account & Lists</span>
          </div>)
          }
        
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
          <Link to="/checkout">
            <div className="header_optionBasket">
              <ShoppingCartOutlinedIcon />
              <span className="header_optionLineTwo header_basketCount">{cartTotalQuantity}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="item-container" >
        {headerItems && headerItems.map((item, index) =>(
          <div key={index}>
          <p>{item}</p>
          </div>
          ))
        
        }
      </div>
    </div>
  );
};

export default Header;
