import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navBar navbar-defualt">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
