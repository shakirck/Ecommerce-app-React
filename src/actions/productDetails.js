import { FETCH_PRODUCTS_DETAILS_SUCCESS } from './actionTypes';
import { fetchProducts } from './products';

export function fetchProductDetails(productId) {
  return (dispatch) => {
    if (localStorage.getItem('products') == null) {
      const url = `https://my-json-server.typicode.com/shakirck/ecommerceDB/products/${productId}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log('2222222222222222222', data);
          dispatch(fetchProductDetailsSuccess(data));
        });
    } else {
      const products = JSON.parse(localStorage.getItem('products'));
      const productIndex = products.findIndex(
        (element) => element.id == productId
      );
      dispatch(fetchProductDetailsSuccess(products[productIndex]));
    }
  };
}

export function fetchProductDetailsSuccess(product) {
  return {
    type: FETCH_PRODUCTS_DETAILS_SUCCESS,
    product,
  };
}
