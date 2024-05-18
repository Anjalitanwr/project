import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
          <div className="footer-top-left">
            <p> I'm a frontend developer from,India without experience because i'm a fresher now.</p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
                <input type="email"placeholder="Enter your email"/>
            </div>
            <div className="footer-subscribe">subscribe</div>
          </div>
        </div>
    <hr/>
    <div className="footer-bottom">
        <p className='footer-bottom-left'>@ 2024 copyright. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term if Services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
    </div>
    </div>
  )
}

export default Footer
