import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Navbar extends Component {
  render() {
    const { cart } = this.props;
    const count = cart.length;
    return (
      <div className="Navbar">
        <div className="left">
          <Link to={'/'} style={{ color: 'white', fontSize: '1.5rem' }}>
            {' '}
            Ecommerce
          </Link>
        </div>
        <div className="right">
          <ul className="nav-contents">
            <li className="nav-item">
              <Link to={'/'} style={{ color: 'white', fontWeight: 600 }}>
                All Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={'/newproduct'}
                style={{ color: 'white', fontWeight: 600 }}
              >
                Add
              </Link>
            </li>
            <li className="nav-item">
              <div className="cart-icon-wrapper">
                <Link to={'/cart'} style={{ color: 'white' }}>
                  <div className="cart-icon">
                    <img src="https://image.flaticon.com/icons/svg/613/613446.svg" />
                    <div className="cart-count">{count}</div>
                  </div>
                </Link>
              </div>
            </li>
            {/* <li>
              <button onClick={this.handleReset}>Reset</button>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return {
    cart,
  };
}
export default connect(mapStateToProps)(Navbar);
