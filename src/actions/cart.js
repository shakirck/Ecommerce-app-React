import { ADD_TO_CART } from './actionTypes';

export function addToCart(productId) {
  return {
    type: ADD_TO_CART,
    productId,
  };
}
