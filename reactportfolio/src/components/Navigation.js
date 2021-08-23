import React from 'react';
import { Link } from 'react-router-dom';
export default function Navigation() {
    
  
  
    return (

      <nav className="navbar navbar-lg bg-info">
        <div className="container-fluid">
          <span className="navbar-brand lg-0 h1 fs-2 fw-bold p-2">Patrick Devaney</span>
  
            <ul className="nav justify-content-end" >
              <li className="nav-item" >
                <Link className="nav-link active text-dark h5" aria-current="page" to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark h5" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark h5" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark h5" to="/resume">Resume</Link>
              </li>
              <li className="nav-item" >
              <a className="nav-link text-dark h5"  href="https://github.com/patrickbdevaney">
              Github</a> 
              </li> <li className="nav-item" >
              <a className="nav-link text-dark h5"  href="https://www.linkedin.com/in/patrick-devaney-6b4b78215/">
              LinkedIn</a> 
              </li>

            </ul>
        </div>
      </nav>
    );
  }
  


