import {
  UPDATE_PRODUCTS,
  FETCH_PRODUCTS_DETAILS_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
} from '../actions/actionTypes';

export default function products(state = [], action) {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return action.products;

    default:
      return state;
  }
}
