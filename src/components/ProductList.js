import React, { Component } from 'react';
import { ProductItem } from '.';
import { connect } from 'react-redux';

export class Products extends Component {
  render() {
    console.log('proppppppppppppppppppps', this.props);
    const { products } = this.props;
    return (
      <div>
        {/* TODO: add products */}

        {products.map((item) => (
          <ProductItem product={item} cart={this.props.cart} key={item.id} />
        ))}
      </div>
    );
  }
}
function mapStateToProps({ cart }) {
  console.log(cart);
  return {
    cart,
  };
}
export default connect(mapStateToProps)(Products);
