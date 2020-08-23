import { connect } from 'react-redux';
import Navbar from './Navbar';
import '../App.css';
import React, { Component } from 'react';
import { fetchProducts } from '../actions/products';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, ProductDetails } from '.';
import NewProduct from './NewProduct';
import { Cart } from '.';

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }
  render() {
    console.log(this.props, 'PROPS');
    const { products, cart } = this.props;
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
          </div>
          <Switch>
            <Route
              exact={true}
              path="/"
              render={(props) => {
                return <Home {...props} products={products} />;
              }}
            />
            <Route
              exact={true}
              path="/products/:productId"
              component={ProductDetails}
            />{' '}
            <Route exact={true} path="/newproduct" component={NewProduct} />
            <Route exact={true} path="/cart" component={Cart} cart={cart} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ products, product, cart }) {
  return {
    products,
    cart,
  };
}
export default connect(mapStateToProps)(App);
