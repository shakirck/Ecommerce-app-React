import { FETCH_PRODUCTS_DETAILS_SUCCESS } from '../actions/actionTypes';

export default function productDetails(state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCTS_DETAILS_SUCCESS:
      return action.product;
    default:
      return state;
  }
}
