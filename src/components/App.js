import { connect } from 'react-redux';
import Navbar from './Navbar';
import '../App.css';
import React, { Component } from 'react';
import { fetchProducts } from '../actions/products';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '.';

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }
  render() {
    console.log(this.props, 'PROPS');
    const { products } = this.props;
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
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return {
    products,
  };
}
export default connect(mapStateToProps)(App);
