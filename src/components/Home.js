import React, { Component } from 'react';
import { ProductList } from '.';

export default class Home extends Component {
  render() {
    console.log('Props *** Home', this.props);
    return (
      <div>
        <ProductList products={this.props.products} />
      </div>
    );
  }
}
