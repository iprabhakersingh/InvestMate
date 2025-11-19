import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import { GeneralContextProvider } from "./GeneralContext";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Funds from "./Funds";

const Dashboard = () => {

  // ⭐ BACKEND WARM-UP → Fixes 2–3 seconds delay
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("https://investmate-2f43.onrender.com/holdings/index", {
      headers: { Authorization: `Bearer ${token}` }
    });

    axios.get("https://investmate-2f43.onrender.com/positions/index", {
      headers: { Authorization: `Bearer ${token}` }
    });

    axios.get("https://investmate-2f43.onrender.com/orders/index", {
      headers: { Authorization: `Bearer ${token}` }
    });
  }, []);
  // ⭐ BACKEND WARM-UP END

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
