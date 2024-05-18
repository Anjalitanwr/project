import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <ul className='nav-menu'>
          <input type="checkbox"id="check"/>
          <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
          </label>
            <li> <AnchorLink className='anchor-link'href='#home'><p onClick={()=>("home")}>Home</p></AnchorLink></li>
            <li> <AnchorLink className='anchor-link' offset={50}href='#about'><p onClick={()=>("about")}>About me</p></AnchorLink></li>
            <li> <AnchorLink className='anchor-link' offset={50}href='#services'><p onClick={()=>("services")}>services</p></AnchorLink></li>
            <li> <AnchorLink className='anchor-link' offset={50}href='#contact'><p onClick={()=>("contact")}>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50}href='#contact'>connect with Me</AnchorLink></div>
      
    </div>
  )
}

export default Navbar
