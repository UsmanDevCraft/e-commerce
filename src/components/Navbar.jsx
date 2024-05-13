import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {

  return (
    <>

    <div>
        <nav className="navbar navbar-expand-lg bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand text-white d-flex gap-2 me-5" to="/"><img src='/ecommerce_logo.jpg' className='rounded-2 navImg' />E-Commerce WebApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item" >
                    <Link className="nav-link active text-white fw-medium" aria-current="page" to="/">Home</Link>
                    </li>
                </ul>
                <form className="d-flex me-3" role="search">
                    <Link className="nav-link me-2" aria-current="page" to="/SearchApi">
                    <button className="btn btn-outline-info" type="submit">Search Your Product</button></Link>
                </form>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item" >   
                    <Link className="nav-link active text-white fw-medium" aria-current="page" to="/login">Login</Link>
                    </li>
                    <li className="nav-item" >
                    <Link className="nav-link active text-white fw-medium me-3" aria-current="page" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item" >
                    <Link className="nav-link active text-white d-flex gap-2" aria-current="page" to="/addtocart"><FaShoppingCart className='fs-4' />Cart</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>

    </>
  )
}

export default Navbar
