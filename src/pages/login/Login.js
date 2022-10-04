import React, { useState } from "react";
import "./Login.css";
import AmazonLogo from "../../helpers/BannerImages/Amazon_Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { signInUser } from "../../helpers/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice";
import MuiTrial from "../../components/signinhelp/SigninHelp";
import SigninHelp from "../../components/signinhelp/SigninHelp";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state)=>state.user)

  const signIn = () => {
    dispatch(login({ email, password, navigate }))
    // navigate("/")
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const emptyClick = () => {

  }

  return (
    <div className="login">
      <Link to="/">
        <img src={AmazonLogo} className="login-logo" alt="logo" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email or mobile phone number</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={signIn} className="login-signIn">
            Sign In
          </button>
        </form>
        <p>
        By continuing, you agree to Amazon's <span className="emptyClick">Conditions of Use</span> and <span className="emptyClick">Privacy Notice.</span>
        </p>
        <SigninHelp />
      </div>
      <p style={{fontFamily:"Arial, Helvetica, sans-serif", fontSize:13}}>New to Amazon?</p>
      <Link to="/register" style={{marginBottom:"8px"}}>
        <button onClick={handleRegister} className="login-register">
          Create your Amazon account
        </button>
      </Link>
    </div>
  );
};

export default Login;
