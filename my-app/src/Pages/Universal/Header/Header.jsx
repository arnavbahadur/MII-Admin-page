import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
        <nav class="nav-bar">
            <a class="nav-link text-white" href="#"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
            <a class="nav-link text-white" href="#">Services</a>
            <div class="right-login">
            <a class="nav-link text-white" href="#">Log out/Log in <i class="fa fa-sign-out" aria-hidden="true"></i></a>
            </div>
            </nav>
    </div>
  )
}

export default Header
