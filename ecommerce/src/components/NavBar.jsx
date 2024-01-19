import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand custom-font" href="#">
          DivineDermal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-5">
              <a className="nav-link" href="#" style={{ color: 'white' }}>
                Inicio
              </a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link" href="#" style={{ color: 'white' }}>
                Productos
              </a>
            </li>
         
            <li className="nav-item mx-5" >
            <CartWidget />
          </li>
            
            <li className="nav-item mx-5">
              <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true" style={{ color: 'white' }}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

