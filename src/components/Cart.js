import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

export class Cart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
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
