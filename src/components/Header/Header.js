import React from "react";
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="navigation">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/team">Team</a>
            <a href="/tickets">Get Tickets</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
