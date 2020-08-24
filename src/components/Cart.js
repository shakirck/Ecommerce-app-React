import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

export class Cart extends Component {
  render() {
    const { cart } = this.props;
    console.log(cart.length);
    return (
      <div className="Cart">
        {cart.length == 0 && (
          <div className="empty-cart">
            <div>Your Cart Is Empty.....!</div>
            {/* <img src="https://image.flaticon.com/icons/svg/3275/3275510.svg" /> */}
            <Link to={'/'}>
              {' '}
              <button className="browse-products btn"> Browse Products</button>
            </Link>
          </div>
        )}
        {cart.map((element) => {
          return <CartItem cart={element} />;
        })}
      </div>
    );
  }
}
function mapStateToProps({ cart, products }) {
  console.log(cart);
  return {
    cart,
    products,
  };
}
export default connect(mapStateToProps)(Cart);
