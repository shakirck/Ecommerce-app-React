import React, { Component } from 'react';
import products from '../reducer/products';
import { Cart } from './Cart';
import { connect } from 'react-redux';

export class CartItem extends Component {
  render() {
    const { cart } = this.props;
    console.log(cart);
    return (
      <div className="CartItem">
        <div>
          <img src={cart.url} />
        </div>
        <div>name:{cart.name}</div>
        <div> Price:{cart.price}</div>
        <div>Description:{cart.description}</div>
      </div>
    );
  }
}
function mapStateToProps({ products }) {
  return {
    products,
  };
}
export default connect(mapStateToProps)(CartItem);
