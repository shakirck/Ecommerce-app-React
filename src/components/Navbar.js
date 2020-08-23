import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Navbar extends Component {
  render() {
    const { cart } = this.props;
    const count = cart.length;
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
              <div className="cart-icon-navbar">
                {' '}
                <Link to={'/cart'}>
                  <div>
                    {' '}
                    Cart <div>{count}</div>
                  </div>{' '}
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
