import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductDetails } from '../actions/productDetails';
import { Link } from 'react-router-dom';

export class ProductDetails extends Component {
  componentDidMount() {
    const { match } = this.props;

    // console.log('@!!!!!!!!!!!!', this.props);
    this.props.dispatch(fetchProductDetails(match.params.productId));
  }
  render() {
    // console.log('%$$$$$#####', this.props);
    const { product } = this.props;
    const ratingStar = [];
    for (let i = 0; i < product.rating; i++) {
      // console.log(product.rating, product.name, '$%^&U*IOPOI*U&^T%');
      ratingStar.push(
        <img src="https://image.flaticon.com/icons/svg/616/616489.svg" />
      );
    }
    return (
      <div className="ProductDetails">
        <Link to={'/'}>
          {' '}
          <img
            className="btn go-back-btn"
            src="https://image.flaticon.com/icons/svg/3227/3227793.svg"
          />{' '}
        </Link>
        <div className="product-wrapper">
          <div className="product-image-wrapper">
            <img src={product.url} />
          </div>
          <div className="product-details-wrapper">
            <div className="product-name-wrapper">{product.name}</div>
            <div className="product-price-wrapper"> ₹{product.price}</div>
            <div>{product.description}</div>
            <div className="product-rating-wrapper"> {ratingStar}</div>{' '}
          </div>{' '}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  // console.log('productDetails~~~~~~~~~~~~~~', state);
  return {
    product: state.productDetails,
  };
}
export default connect(mapStateToProps)(ProductDetails);
