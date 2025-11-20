import React, { useState, useEffect, useMemo, Suspense } from "react";
import axios from "axios";
const VerticalGraph = React.lazy(() => import("./VerticalGraph"));

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get("https://investmate-2f43.onrender.com/positions/index", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setAllPositions(res.data);
      });
  }, []);

  // 🔥 Heavy math optimized
  const processed = useMemo(() => {
    return allPositions.map((s) => {
      const curValue = s.price * s.qty;
      const pnl = (s.price - s.avg) * s.qty;
      return { ...s, curValue, pnl };
    });
  }, [allPositions]);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      {/* ⚡ Table fast */}
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

      {/* ⚡ Chart loads in background, no UI freeze */}
      <Suspense fallback={<></>}>
        {processed.length > 0 && <VerticalGraph data={processed} />}
      </Suspense>
    </>
  );
};

export default Positions;
