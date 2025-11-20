import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { watchlist } from "../data/data";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  // 🔥 FASTEST LOOKUP - watchlist ko map me convert
  const priceMap = useMemo(() => {
    const map = {};
    watchlist.forEach((item) => {
      map[item.name] = item.price;
    });
    return map;
  }, []);

  // 🔥 API runs only once, no infinite loop
  useEffect(() => {
    axios
      .get("https://investmate-2f43.onrender.com/orders/index", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setAllOrders(res.data.orders);
      });
  }, []);

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
              const ltp = priceMap[stock.name] || 0; // ultra fast lookup
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


