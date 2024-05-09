import React from 'react'
import Style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import images from '../../assets/images/freshcart-logo.svg';
const Navbar = () => {


return <>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to=''><img src={images} alt='fresh market logo'/></Link>
   
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active " to='cart' >cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " to='products'>products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " to='Brands'>brands</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " to='categories'>categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " to='register' >register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='login'>login</Link>
        </li>
    
      </ul>
  
    </div>
  </div>
</nav>

    </>
  
}

export default Navbar
