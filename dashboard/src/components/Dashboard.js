import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { GeneralContextProvider } from "./GeneralContext";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Funds from "./Funds";

const Dashboard = () => {
  // small warm-up (optional but helps Render cold-start)
  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    // fire-and-forget preloads so backend wakes up (doesn't block UI)
    fetch("https://investmate-2f43.onrender.com/holdings/index", { headers }).catch(()=>{});
    fetch("https://investmate-2f43.onrender.com/positions/index", { headers }).catch(()=>{});
    fetch("https://investmate-2f43.onrender.com/orders/index", { headers }).catch(()=>{});
  }, []);

  return (
    <GeneralContextProvider>
      <div className="dashboard-container">
        <WatchList />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
          </Routes>
        </div>
      </div>
    </GeneralContextProvider>
  );
};

export default Dashboard;
