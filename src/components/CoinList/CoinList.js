import React from "react";

function CoinList({ list }) {
  return (
    <div className="container p-5">
      <table className="table table-hover">
        <tbody>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th className="text-end">Price</th>
            <th className="text-end">1d%</th>
            <th className="text-end">Market Cap</th>
            <th className="text-end">Volume</th>
          </tr>
          {list}
        </tbody>
      </table>
    </div>
  );
}

export default CoinList;
