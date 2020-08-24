import React, { Component } from 'react';
import { ProductList } from '.';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSorted: false,
    };
  }
  handleSort = () => {
    this.setState({
      isSorted: true,
    });
  };
  handleCancelSort = () => {
    this.setState({
      isSorted: false,
    });
  };

  render() {
    console.log('Props *** Home', this.props);
    const { isSorted } = this.state;
    const { products } = this.props;

    return (
      <div className="Home">
        <div>
          {' '}
          <button onClick={this.handleSort}>Sort By Price </button>{' '}
          {isSorted && <button onClick={this.handleCancelSort}>X</button>}
        </div>

        <ProductList products={products} isSorted={isSorted} />
      </div>
    );
  }
}
