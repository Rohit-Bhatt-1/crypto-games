import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCoinsActionCreator from "../../redux/actionCreator/getCoinsActionCreator/getCoinsActionCreator";
import CoinList from "../CoinList/CoinList";
import Loading from "../Loading/Loading";

function Home() {
  const coins = useSelector((store) => store.getCoinsReducer);
  console.log("coins", coins);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    (async () => {
      setloading(true);
      dispatch(await getCoinsActionCreator());
      setloading(false);
    })();
  }, [dispatch]);

  const display =
    coins.length > 0 &&
    coins[0].map((coin, index) => (
      <tr key={index}>
        <td>{coin.market_cap_rank}</td>
        <td>{coin.name}</td>
        <td className="text-end">{coin.current_price}</td>
        {coin.price_change_percentage_24h < 0 ? (
          <td className="text-end text-danger">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </td>
        ) : (
          <td className="text-end text-success">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </td>
        )}
        <td className="text-end">{coin.market_cap}</td>
        <td className="text-end">{coin.circulating_supply}</td>
      </tr>
    ));
  if (loading) return <Loading />;
  return <CoinList list={display} />;
}

export default Home;
