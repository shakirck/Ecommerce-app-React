import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductDetails } from '../actions/productDetails';

export class ProductDetails extends Component {
  componentDidMount() {
    const { match } = this.props;

    console.log('@!!!!!!!!!!!!', this.props);
    this.props.dispatch(fetchProductDetails(match.params.productId));
  }
  render() {
    console.log('%$$$$$#####', this.props);
    const { product } = this.props;
    return (
      <div>
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
function mapStateToProps(state) {
  console.log('productDetails~~~~~~~~~~~~~~', state);
  return {
    product: state.productDetails,
  };
}
export default connect(mapStateToProps)(ProductDetails);
