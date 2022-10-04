import React, { useState } from "react";
import ArrowRightSharpIcon from "@mui/icons-material/ArrowRightSharp";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import "./SigninHelp.css";

const SigninHelp = () => {
  const [displayMenu, setDisplayMenu] = useState(true);

  const changeDisp = () => {
    setDisplayMenu(!displayMenu);
  };

  const emptyClick = () => {};

  if (displayMenu) {
    return (
      <div className="helpMenu1">
        <div className="helpItems help1">
          <ArrowRightSharpIcon className="icons" onClick={changeDisp} />
          <p className="pTag" onClick={changeDisp}>
            Need help?
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="helpMenu2">
      <div className="helpItems help2">
        <ArrowDropDownSharpIcon className="icons" onClick={changeDisp} />
        <div className="pBox helpItems">
          <p className="pTag" onClick={changeDisp}>
            Need help?
          </p>
          <p className="pTag" onClick={emptyClick}>
            Forgot your password?
          </p>
          <p className="pTag" onClick={emptyClick}>
            Other issues with Sign-In
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninHelp;
