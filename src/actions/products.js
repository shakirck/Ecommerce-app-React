import { UPDATE_PRODUCTS, DELETE_PRODUCT_SUCCESS } from './actionTypes';
import products from '../reducer/products';

export function fetchProducts() {
  return (dispatch) => {
    if (localStorage.getItem('products') == null) {
      const url = 'https://my-json-server.typicode.com/shakirck/ecommerceDB/db';
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem('products', JSON.stringify(data.products));
          dispatch(updateProducts(data.products));
        });
    } else {
      // console.log('Local storage', localStorage.getItem('products'));
      dispatch(updateProducts(JSON.parse(localStorage.getItem('products'))));
    }
  };
}

export function updateProducts(products) {
  return {
    type: UPDATE_PRODUCTS,
    products,
  };
}

export function editProducts(editedProduct) {
  return (dispatch) => {
    const products = JSON.parse(localStorage.getItem('products'));
    const index = products.findIndex(
      (element) => element.id == editedProduct.editId
    );

    products[index] = {
      ...products[index],
      id: editedProduct.editId,
      name: editedProduct.name,
      price: editedProduct.price,
      description: editedProduct.description,
      rating: editedProduct.rating,
    };

    localStorage.removeItem('products');
    console.log(' CHANGING THE PRODUCT DETAILS ,', products[index]);
    localStorage.setItem('products', JSON.stringify(products));
    dispatch(fetchProducts());
  };
}

export function addNewProduct(product) {
  return (dispatch) => {
    const products = JSON.parse(localStorage.getItem('products'));
    const lengthOfProducts = products.length;
    const newProduct = {
      name: product.name,
      description: product.description,
      rating: product.rating,
      url: product.url,
      price: product.price,

      id: lengthOfProducts + 2,
    };
    const newProducts = [...products, newProduct];
    console.log(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
    dispatch(fetchProducts());
  };
}

export function deleteProducts(products) {
  return (dispatch) => {
    localStorage.setItem('products', JSON.stringify(products));
    dispatch(fetchProducts());
  };
}
