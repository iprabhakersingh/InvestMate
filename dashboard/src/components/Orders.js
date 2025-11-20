import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { watchlist } from "../data/data";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  // FAST lookup map for watchlist prices (O(1) per row)
  const priceMap = useMemo(() => {
    const map = {};
    for (let i = 0; i < watchlist.length; i++) {
      const item = watchlist[i];
      map[item.name] = item.price;
    }
    return map;
  }, []);

  // fetch once only
  useEffect(() => {
    let mounted = true;
    axios
      .get("https://investmate-2f43.onrender.com/orders/index", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (!mounted) return;
        setAllOrders(res.data.orders || []);
      })
      .catch(() => {
        // ignore, keep UX stable
      });
    return () => {
      mounted = false;
    };
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
              const ltp = priceMap[stock.name] || 0;
              const curValue = ltp * stock.qty;

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{Number(stock.price).toFixed(2)}</td>
                  <td>{(ltp || 0).toFixed(2)}</td>
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
