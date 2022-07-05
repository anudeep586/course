import React from "react";
import "./navbar.css";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <section className="navbar">
   <Link to="/home"  ><h3 className="navbar-item"> Home</h3></Link>
   <Link to="/about"  ><h3 className="navbar-item"> About</h3></Link>
   <Link to="/portfolio"  ><h3 className="navbar-item"> Contact</h3></Link>
   <Link to="/shop"  ><h3 className="navbar-item"> My courses</h3></Link>
   <Link to="/signup"  ><h3 className="navbar-item"> signup</h3></Link>
   <Link to="/login"  ><h3 className="navbar-item"> signin</h3></Link>
    </section>
  );
};

export default Navbar;
