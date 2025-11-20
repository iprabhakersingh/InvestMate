import React, { useState, useEffect } from "react";
import axios from "axios";
import { watchlist } from "../data/data";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://investmate-2f43.onrender.com/orders/index", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const newData = res.data.orders;

        // 🔥 SIMPLE FIX: sirf tab update karega jab data actual me change ho
        if (JSON.stringify(newData) !== JSON.stringify(allOrders)) {
          setAllOrders(newData);
        }
      })
      .catch(() => {});
  }, [allOrders]);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Avg Buy</th>
              <th>LTP</th>
              <th>Cur. val</th>
            </tr>

            {allOrders.map((stock, index) => {
              const ltp =
                watchlist.find((x) => x.name === stock.name)?.price || 0;
              const curValue = ltp * stock.qty;

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{ltp.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
