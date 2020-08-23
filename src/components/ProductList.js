import React, { Component } from 'react';
import { ProductItem } from '.';

export default class Products extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {/* TODO: add products */}

        {products.map((item) => (
          <ProductItem product={item} key={item.id} />
        ))}
      </div>
    );
  }
}
