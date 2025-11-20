import React, { useState, useEffect, useMemo, Suspense } from "react";
import axios from "axios";
const VerticalGraph = React.lazy(() => import("./VerticalGraph"));

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("https://investmate-2f43.onrender.com/holdings/index", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setAllHoldings(res.data);
      });
  }, []);

  // 🔥 All heavy calculations optimized
  const processed = useMemo(() => {
    return allHoldings.map((s) => {
      const curValue = s.price * s.qty;
      const pnl = (s.price - s.avg) * s.qty;
      return { ...s, curValue, pnl };
    });
  }, [allHoldings]);

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      {/* ⚡ Table renders instantly */}
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Avg</th>
            <th>LTP</th>
            <th>Cur Value</th>
            <th>P&L</th>
          </tr>

          {processed.map((s, idx) => (
            <tr key={idx}>
              <td>{s.name}</td>
              <td>{s.qty}</td>
              <td>{s.avg.toFixed(2)}</td>
              <td>{s.price.toFixed(2)}</td>
              <td>{s.curValue.toFixed(2)}</td>
              <td>{s.pnl.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ⚡ CHART non-blocking — page first, chart later */}
      <Suspense fallback={<></>}>
        {processed.length > 0 && <VerticalGraph data={processed} />}
      </Suspense>
    </>
  );
};

export default Holdings;
