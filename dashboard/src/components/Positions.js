import React, { useState, useEffect, useMemo, Suspense } from "react";
import axios from "axios";
// import { VerticalGraph } from "./VerticalGraph";
const VerticalGraph = React.lazy(() => import("./VerticalGraph"));

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    let mounted = true;
    axios
      .get("https://investmate-2f43.onrender.com/positions/index", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (!mounted) return;
        setAllPositions(res.data || []);
      })
      .catch(() => {});
    return () => (mounted = false);
  }, []);

  const processed = useMemo(() => {
    return allPositions.map((stock) => {
      const qty = Number(stock.qty) || 0;
      const price = Number(stock.price) || 0;
      const avg = Number(stock.avg) || 0;
      const curValue = price * qty;
      const pnl = (price - avg) * qty;
      return { ...stock, qty, price, avg, curValue, pnl };
    });
  }, [allPositions]);

  const data = useMemo(() => {
    const labels = processed.map((s) => s.name);
    return {
      labels,
      datasets: [
        {
          label: "Stock Price",
          data: processed.map((s) => s.price),
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
  }, [processed]);

  return (
    <>
      <h3 className="title">Positions ({processed.length})</h3>

      <div className="order-table">
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>

            {processed.map((stock, index) => {
              const profClass = stock.curValue - stock.avg * stock.qty >= 0 ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>{stock.pnl.toFixed(2)}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Suspense fallback={<></>}>
          {processed.length > 0 && <VerticalGraph data={data} />}
        </Suspense>
      </div>
    </>
  );
};

export default Positions;
