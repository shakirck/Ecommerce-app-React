import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import products from '../reducer/products';
import {
  editProducts,
  fetchProducts,
  deleteProducts,
} from '../actions/products';
import { connect } from 'react-redux';
import { ProductDetails } from '.';
import { addToCart, removeFromCart } from '../actions/cart';

export class ProductItem extends Component {
  constructor(props) {
    super(props);
    const { product } = this.props;

    this.state = {
      editmode: false,
      success: false,
      isInCart: false,
      name: product.name,
      description: product.description,
      price: product.price,
      editId: product.id,
      rating: product.rating,
    };
  }
  checkCart = (product) => {
    let result = false;
    const { cart } = this.props;
    for (let item of cart) {
      if (item.id === product.id) {
        result = true;
      }
    }
    return result;
  };
  handleEdit = () => {
    this.setState({
      editmode: true,
    });
  };
  handleSave = () => {
    console.log('clicked save');
    this.props.dispatch(editProducts(this.state));
    console.log(this.state);
    this.setState({
      editmode: false,
      success: true,
    });
  };
  handleChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };
  handleAddCart = () => {
    const { product } = this.props;
    this.props.dispatch(addToCart(product));
  };
  handleRemoveCart = () => {
    this.props.dispatch(removeFromCart(this.props.product));
  };

  handleDelete = () => {
    const { product } = this.props;
    const products = JSON.parse(localStorage.getItem('products'));

    const newProducts = products.filter((item) => item.id !== product.id);
    console.log(newProducts);
    this.props.dispatch(deleteProducts(newProducts));
  };
  render() {
    // console.log(this.state.name, this.state.description);
    localStorage.setItem('cart', JSON.stringify(this.props.cart));

    const { product } = this.props;
    const { editmode, success, isInCart } = this.state;
    const checkCartStatus = this.checkCart(product);

    const ratingStar = [];
    for (let i = 0; i < product.rating; i++) {
      console.log(product.rating, product.name, '$%^&U*IOPOI*U&^T%');
      ratingStar.push(
        <img src="https://image.flaticon.com/icons/svg/616/616489.svg" />
      );
    }
    return (
      <div className="ProductItem">
        <div class="notification-box">
          {success && (
            <div className="notification">
              <div>Product Edited</div>
              <img src="https://image.flaticon.com/icons/svg/190/190411.svg" />
            </div>
          )}
        </div>
        {!editmode && (
          <div className="product-wrapper">
            <div className="product-image-wrapper">
              <img src={product.url} />
            </div>
            <div className="product-details-wrapper">
              <div className="product-name-wrapper">{product.name}</div>
              <div className="product-price-wrapper"> ₹{product.price}</div>
              <div>
                {product.description.substring(1, 39)}........
                <Link to={`/products/${product.id}`}>More</Link>
              </div>
              <div className="product-rating-wrapper"> {ratingStar}</div>
              {!checkCartStatus && (
                <div>
                  <button className="btn cart-btn" onClick={this.handleAddCart}>
                    {' '}
                    Add ToCart{' '}
                    <img src="https://image.flaticon.com/icons/svg/613/613446.svg" />
                  </button>
                </div>
              )}
              {checkCartStatus && (
                <div>
                  <button
                    className="btn cart-btn cart-remove"
                    onClick={this.handleRemoveCart}
                  >
                    Remove From Cart
                    <img src="https://image.flaticon.com/icons/svg/2568/2568244.svg" />
                  </button>
                </div>
              )}
            </div>
            <div class="btn-group">
              <img
                className="btn edit-btn"
                onClick={this.handleEdit}
                src="https://image.flaticon.com/icons/svg/535/535524.svg"
              />

              <div>
                <img
                  className="btn delete-btn"
                  onClick={this.handleDelete}
                  src="https://image.flaticon.com/icons/svg/1632/1632602.svg"
                />
              </div>
            </div>
          </div>
        )}
        {editmode && (
          <div className="edit-product-wrapper">
            <div className="edit-input">
              Name:
              <input
                value={this.state.name}
                onChange={(e) => {
                  this.handleChange('name', e.target.value);
                }}
              />
            </div>
            <div className="edit-input">
              Price:
              <input
                value={this.state.price}
                onChange={(e) => {
                  this.handleChange('price', e.target.value);
                }}
              />
            </div>
            <div className="edit-input">
              Description:
              <textarea
                value={this.state.description}
                onChange={(e) => {
                  this.handleChange('description', e.target.value);
                }}
              />
            </div>
            <div className="edit-input">
              rating:
              <input
                value={this.state.rating}
                onChange={(e) => {
                  this.handleChange('rating', e.target.value);
                }}
              />
            </div>
            <div>
              <button className="btn" onClick={this.handleSave}>
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect()(ProductItem);
