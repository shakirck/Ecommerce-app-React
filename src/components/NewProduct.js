import React, { Component } from 'react';
import { addNewProduct } from '../actions/products';
import { connect } from 'react-redux';

export class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      name: '',
      price: '',
      description: '',
      rating: '',
      url: '',
    };
  }
  handleChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };
  handleSubmit = () => {
    this.props.dispatch(addNewProduct(this.state));
    this.setState({
      success: true,
      name: '',
      price: '',
      description: '',
      rating: '',
      url: '',
    });
  };
  render() {
    // console.log(this.state);
    const { success } = this.state;
    return (
      <div className="NewProduct">
        <div class="notification-box">
          {success && (
            <div className="notification">
              <div>Product Added</div>
              <img src="https://image.flaticon.com/icons/svg/190/190411.svg" />
            </div>
          )}
        </div>
        <div>
          name:
          <input
            value={this.state.name}
            onChange={(e) => {
              this.handleChange('name', e.target.value);
            }}
          />
        </div>
        <div>
          description:
          <textarea
            value={this.state.description}
            onChange={(e) => {
              this.handleChange('description', e.target.value);
            }}
          />
        </div>
        <div>
          price:
          <input
            value={this.state.price}
            onChange={(e) => {
              this.handleChange('price', e.target.value);
            }}
          />
        </div>
        <div>
          rating:
          <input
            value={this.state.rating}
            onChange={(e) => {
              this.handleChange('rating', e.target.value);
            }}
          />
        </div>{' '}
        <div>
          image url:
          <input
            value={this.state.url}
            onChange={(e) => {
              this.handleChange('url', e.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={this.handleSubmit}> Add </button>
        </div>
      </div>
    );
  }
}

export default connect()(NewProduct);
