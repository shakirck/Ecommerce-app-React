import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import products from '../reducer/products';
import { editProducts } from '../actions/products';
import { connect } from 'react-redux';
import { ProductDetails } from '.';
import { addToCart } from '../actions/cart';

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
    };
  }
  handleEdit = () => {
    this.setState({
      editmode: true,
    });
  };
  handleSave = () => {
    this.props.dispatch(editProducts(this.state));
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
    this.props.dispatch(addToCart(product.id));
  };
  render() {
    console.log('PPPPPPPPPPROOOOOOOOOPS', this.props);
    const { product } = this.props;
    const { editmode, success, isInCart } = this.state;
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
            <div> Price:{product.price}</div>
            <div>Description:{product.description}</div>
            <div>
              <button onClick={this.handleEdit}> Edit</button>{' '}
            </div>
            {!isInCart && (
              <div>
                {' '}
                <button onClick={this.handleAddCart}> Add ToCart</button>
              </div>
            )}
            {isInCart && (
              <div>
                {' '}
                <button> Remove From Cart</button>
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
              <button onClick={this.handleSave}> Save</button>{' '}
            </div>
          </div>
        )}
        <div>
          {' '}
          <button>Delete</button>
        </div>
        <Link to={`/products/${product.id}`}>More Details</Link>
      </div>
    );
  }
}

export default connect()(ProductItem);
