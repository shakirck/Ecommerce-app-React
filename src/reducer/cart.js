import { ADD_TO_CART } from '../actions/actionTypes';

const initialCartState = [];
export default function cart(state = initialCartState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.productId, ...state];
    default:
      return state;
  }
}
