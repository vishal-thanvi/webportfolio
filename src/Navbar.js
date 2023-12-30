import React from 'react';
import './Navcss.css';
const Navbar = () => {
  const navStyles = {
    color: 'white',
    backgroundColor: '#020810', 
    paddingRight: '0', // Adjust the right padding here
    marginRight: '0', // Adjust the right margin here
  };

  const linkStyles = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navStyles}>
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <a style={linkStyles} className="nav-link" href="#section2">About</a>
            </li>
            <li className="nav-item">
              <a style={linkStyles} className="nav-link" href="#section3">Projects</a>
            </li>
            <li className="nav-item">
              <a style={linkStyles} className="nav-link" href="#section4">Skills</a>
            </li>
            <li className="nav-item">
              <a style={linkStyles} className="nav-link" href="#section5">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
