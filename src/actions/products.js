import { UPDATE_PRODUCTS } from './actionTypes';

export function fetchProducts() {
  return (dispatch) => {
    const url = 'https://my-json-server.typicode.com/shakirck/ecommerceDB/db';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(updateProducts(data.products));
      });
  };
}

export function updateProducts(products) {
  return {
    type: UPDATE_PRODUCTS,
    products,
  };
}
