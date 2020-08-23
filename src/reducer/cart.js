import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

const initialCartState = JSON.parse(localStorage.getItem('cart')) || [];
export default function cart(state = initialCartState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return state.concat(action.product);
    case REMOVE_FROM_CART:
      return state.filter((product) => product.id !== action.product.id);
    default:
      return state;
  }
}
