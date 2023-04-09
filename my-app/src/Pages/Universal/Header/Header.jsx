import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
        <nav className="nav-bar">
       
          <div className="left-align">
            <a class="nav-link text-white" href="#"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
            <a class="nav-link text-white" href="#"><i class="fa fa-home" aria-hidden="true"></i>Services</a>
            <a class="nav-link text-white" href="#"><i class="fa fa-home" aria-hidden="true"></i> Contact us</a>
           </div>
            <div class="right-align">
            <a class="nav-link text-white" href="#">Sign in/Log in <i class="fa fa-sign-out" aria-hidden="true"></i></a>
            <a class="nav-link text-white" href="#">Log out <i class="fa fa-sign-out" aria-hidden="true"></i></a>
             </div>   
            </nav>
    </div>
  )
}

export default Header
