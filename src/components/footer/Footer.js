import React from 'react'
import "./Footer.css"

const Footer = () => {

const emptyClick = () => {};

  return (
    <div className='footer'>
        <div className="links">
            <p className="pTag" onClick={emptyClick}> Conditions of Use</p>
            <p className="pTag" onClick={emptyClick}> Privacy Notice </p>
            <p className="pTag" onClick={emptyClick}> Help </p>
        </div>
        <p className='footerBottom'>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
    </div>
  )
}

export default Footer