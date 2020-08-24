import React, { Component } from 'react';
import { ProductItem } from '.';
import { connect } from 'react-redux';

export class Products extends Component {
  sortByProperty = (property) => {
    return (a, b) => {
      if (a[property] > b[property]) return 1;
      else if (a[property] < b[property]) return -1;

      return 0;
    };
  };
  render() {
    console.log('proppppppppppppppppppps', this.props);
    const { products } = this.props;
    const { isSorted } = this.props;
    console.log(isSorted, 'ISSORTED');
    if (isSorted) {
      products.sort(this.sortByProperty('price'));
    } else {
      products.sort(this.sortByProperty('id'));
    }
    return (
      <div className="ProductList">
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
