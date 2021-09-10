import { GET_ALL_COINS, GET_ALL_COINS_ERROR } from "../actionTypes";

const getCoinsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_ALL_COINS:
      return [action.payload];
    case GET_ALL_COINS_ERROR:
      return { ...action.error };
    default:
      return state;
  }
};

export default getCoinsReducer;
