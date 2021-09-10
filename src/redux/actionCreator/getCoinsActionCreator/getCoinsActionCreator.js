import { default as axios } from "axios";
import { GET_ALL_COINS, GET_ALL_COINS_ERROR } from "../../actionTypes";

const getCoinsActionCreator = async (
  currency = "inr",
  pageSize = 50,
  page = 1
) => {
  try {
    const data = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${pageSize}&page=${page}&sparkline=false`
    );
    return { type: GET_ALL_COINS, payload: data.data };
  } catch (error) {
    const resp = { message: "OOPS! Somthing went wrong", error: error };
    return { type: GET_ALL_COINS_ERROR, error: resp };
  }
};

export default getCoinsActionCreator;
