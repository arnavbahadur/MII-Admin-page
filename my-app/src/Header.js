import React from 'react'
import "./Admin.css"
function header() {
  return (
    <div>
       <nav class="nav bg-purple justify-content-center">
  <a class="nav-link text-white" href="#"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
  <a class="nav-link text-white" href="#">Services</a>
  <a class="nav-link text-white" href="#">Logout <i class="fa fa-sign-out" aria-hidden="true"></i></a>
</nav>
    </div>
  )
}

export default header
