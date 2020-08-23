import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="left">Ecommerce</div>
        <div className="right">
          <ul className="nav-contents">
            <li className="nav-item">All Products</li>
            <li className="nav-item">Add Product</li>
            <li className="nav-item">
              <div className="cart-icon-navbar"> Cart</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
