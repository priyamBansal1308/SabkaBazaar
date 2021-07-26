import {
  ADD_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_CART,
} from "./cartActionTypes";

export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const increaseQuantity = (prodId) => {
  return {
    type: INCREASE_QUANTITY,
    payload: prodId,
  };
};

export const decreaseQuantity = (prodId) => {
  return {
    type: DECREASE_QUANTITY,
    payload: prodId,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
    
  };
};
