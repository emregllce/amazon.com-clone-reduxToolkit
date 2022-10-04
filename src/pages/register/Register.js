import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import AmazonLogo from "../../helpers/BannerImages/Amazon_Logo.png";
// import { createUser } from "../../helpers/firebase";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/userSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
  const [passConfirm, setPassConfirm] = useState(true);
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state)=>state.user)
  
  // useEffect(() => {
    //   if (currentUser){
      //    navigate("/")
      //     console.log(`registercurly`, currentUser);
      //   }
      // }, [currentUser])
      console.log(currentUser);
      
      const handleRegister = () => {
        if (password2 === password) {
          dispatch(register({navigate, name, email, password  }));
      // navigate("/");
      // createUser(email, password, name, navigate);
    } else {
      setPassConfirm(false);
    }
  };

  return (
    <div className="register">
      <Link to="/">
        <img src={AmazonLogo} alt="logo" className="register-logo" />
      </Link>
      <div className="register-container">
        <h1>Create Account</h1>
        <form>
          <h5>Your name</h5>
          <input
            placeholder="First and last name"
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <h5>Mobile number or email</h5>
          <input
            required
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            required
            placeholder="At least 6 characters"
            minLength={6}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {passConfirm ? (
            <p className="blueP">
              <span className="blueSpan">i</span>Passwords must be at least 6
              characters.
            </p>
          ) : (
            <p className="redP">
              <span className="redSpan">i</span>Passwords must match.
            </p>
          )}
          <h5>Re-enter Password</h5>
          <input
            className={password2 === password ? "blue" : "red"}
            type="password"
            required
            onChange={(e) => setPassword2(e.target.value)}
          />
          <button type="button" className="continue" onClick={handleRegister}>
            Verify email
          </button>
          <div className="detail">
            <p>Already have an account?</p>
            <Link to="/login" className="signin-link">
              <p>Sign In</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
