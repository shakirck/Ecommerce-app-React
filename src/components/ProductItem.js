import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="ProductItem">
        <div>name:{product.name}</div>
        <div> Price:{product.price}</div>
        <div>Description:{product.description}</div>
        <div>Edit </div>
        <div> Delete</div>
        <div>Add To Cart</div>
      </div>
    );
  }
}
