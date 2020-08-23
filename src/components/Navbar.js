import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="left">Ecommerce</div>
        <div className="right">
          <ul className="nav-contents">
            <li className="nav-item">
              <Link to={'/'}>All Products</Link>
            </li>
            <li className="nav-item">
              {' '}
              <Link to={'/newproduct'}>Add </Link>
            </li>
            <li className="nav-item">
              <div className="cart-icon-navbar"> Cart</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
