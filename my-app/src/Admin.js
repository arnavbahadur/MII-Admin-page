import React from 'react'
import "./Admin.css
"
function Admin() {
  return (
    <div>
      <nav className="nav bg-purple justify-content-center">
  <a className="nav-link text-white" href="#"><i className="fa fa-home" aria-hidden="true"></i> Home</a>
  <a className="nav-link text-white" href="#">Services</a>
  <a className="nav-link text-white" href="#">Logout <i className="fa fa-sign-out" aria-hidden="true"></i></a>
</nav>

<div className="container py-5">
  <div className="row">
    <div className="col-lg-12 p-5">
      <h1> <i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard</h1>
      <hr />
    </div>
  </div>
  <div className="row">
    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2 p-2">
      <a className="text-decoration-none" href="#">
        <div className="card p-3 shadow bg-purple text-center border-0">
          <div className="card-body">
            <i className="fa fa-bookmark-o fa-2x" aria-hidden="true"></i>
            <hr />
            <p className="card-title lead">Offer's</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2 p-2">
      <a className="text-decoration-none" href="#">
        <div className="card p-3 shadow bg-purple text-center border-0">
          <div className="card-body">
            <i className="fa fa-edit fa-2x" aria-hidden="true"></i>
            <hr />
            <p className="card-title lead">Blog's</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2 p-2">
      <a className="text-decoration-none" href="#">
        <div className="card p-3 shadow bg-purple text-center border-0">
          <div className="card-body">
            <i className="fa fa-image fa-2x" aria-hidden="true"></i>
            <hr />
            <p className="card-title lead">Gallery</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2 p-2">
      <a className="text-decoration-none" href="#">
        <div className="card p-3 shadow bg-purple text-center border-0">
          <div className="card-body">
            <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
            <hr />
            <p className="card-title lead">Enquiry</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2 p-2">
      <a className="text-decoration-none" href="#">
        <div className="card p-3 shadow bg-purple text-center border-0">
          <div className="card-body">
            <i className="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
            <hr />
            <p className="card-title lead">Order's</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2 p-2">
      <a className="text-decoration-none" href="#" data-toggle="modal" data-target="#modelHELP">
        <div className="card p-3 shadow bg-purple text-center border-0">
          <div className="card-body">
            <i className="fa fa-question fa-2x" aria-hidden="true"></i>
            <hr />
            <p className="card-title lead">Support</p>
          </div>
        </div>
      </a>
    </div>

  </div>
</div>

<footer className="footer fixed-bottom">
  <div className="row text-center p-3">
    <p className="small text-muted">Develop & Design by @imayushshrivastava</p>
  </div>
</footer>


<div className="modal fade" id="modelHELP" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title"><i className="fa fa-question-circle-o" aria-hidden="true"></i> Technical Support
          24/7</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body p-5">
        <p>
          <small>(Mon - Sat / 10AM - 6PM)</small>
        </p>
        <hr />
        <p> <i className="fa fa-envelope mr-3" aria-hidden="true"></i> </p>
        <p><i className="fa fa-volume-control-phone mr-3" aria-hidden="true"></i> +91-123654789 </p>

      </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default Admin
