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
        {success && <div>Product Edited</div>}
        {!editmode && (
          <div>
            <div>
              {' '}
              <img src={product.url} />
            </div>
            <div>name:{product.name}</div>
            <div> RS:{product.price}</div>
            <div>Description:{product.description}</div>
            <div className="rating-wrapper"> Rating : {ratingStar}</div>
            <div>
              <button onClick={this.handleEdit}> Edit</button>{' '}
            </div>
            {!checkCartStatus && (
              <div>
                {' '}
                <button onClick={this.handleAddCart}> Add ToCart</button>
              </div>
            )}
            {checkCartStatus && (
              <div>
                {' '}
                <button onClick={this.handleRemoveCart}>
                  {' '}
                  Remove From Cart
                </button>
              </div>
            )}
          </div>
        )}
        {editmode && (
          <div>
            <div>
              Name:{' '}
              <input
                value={this.state.name}
                onChange={(e) => {
                  this.handleChange('name', e.target.value);
                }}
              />
            </div>
            <div>
              {' '}
              Price:{' '}
              <input
                value={this.state.price}
                onChange={(e) => {
                  this.handleChange('price', e.target.value);
                }}
              />
            </div>
            <div>
              Description:{' '}
              <textarea
                value={this.state.description}
                onChange={(e) => {
                  this.handleChange('description', e.target.value);
                }}
              />
            </div>
            <div>
              {' '}
              rating:{' '}
              <input
                value={this.state.rating}
                onChange={(e) => {
                  this.handleChange('rating', e.target.value);
                }}
              />
            </div>
            <div>
              <button onClick={this.handleSave}> Save</button>{' '}
            </div>
          </div>
        )}
        <div>
          {' '}
          <button onClick={this.handleDelete}>Delete</button>
        </div>
        <Link to={`/products/${product.id}`}>More Details</Link>
      </div>
    );
  }
}

export default connect()(ProductItem);
