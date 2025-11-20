import React, { useState, useEffect, useMemo, Suspense } from "react";
import axios from "axios";
// import { VerticalGraph } from "./VerticalGraph";
const VerticalGraph = React.lazy(() => import("./VerticalGraph"));

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    let mounted = true;
    axios
      .get("https://investmate-2f43.onrender.com/holdings/index", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (!mounted) return;
        setAllHoldings(res.data || []);
      })
      .catch(() => {});
    return () => (mounted = false);
  }, []);

  // precompute expensive values once per data change
  const processed = useMemo(() => {
    return allHoldings.map((stock) => {
      const qty = Number(stock.qty) || 0;
      const price = Number(stock.price) || 0;
      const avg = Number(stock.avg) || 0;
      const curValue = price * qty;
      const pnl = (price - avg) * qty;
      return { ...stock, qty, price, avg, curValue, pnl };
    });
  }, [allHoldings]);

  // chart data derived from processed (fast)
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
      <h3 className="title">Holdings ({processed.length})</h3>

      <div className="order-table">
        <table>
          <tbody>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>

            {processed.map((stock, index) => {
              const profClass = stock.curValue - stock.avg * stock.qty >= 0 ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{stock.curValue.toFixed(2)}</td>
                  <td className={profClass}>{stock.pnl.toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      {/* non-blocking chart load: table displays immediately */}
      <Suspense fallback={<></>}>
        {processed.length > 0 && <VerticalGraph data={data} />}
      </Suspense>
    </>
  );
};

export default Holdings;
