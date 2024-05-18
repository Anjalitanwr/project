import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const hero = () => {
  return (
    <div id='home'className='hero'>
        {/* <img src={portfolio.jpg} alt=""/> */}
        <h1><span>I'm Anjali Sen,</span>WEB DEVELOPER Based in India</h1>
        <p>I'm Web developer from meerut,India with freshers in multiple skills like HTML, CSS, Javascripts and React.js, etc.. </p>
         <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50}href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
            </div>      
    </div>
  )
}

export default hero
