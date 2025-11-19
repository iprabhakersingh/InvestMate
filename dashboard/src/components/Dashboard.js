import React, { useState } from "react";
import { GeneralContextProvider } from "./GeneralContext";

import WatchList from "./WatchList";
import Summary from "./Summary";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Funds from "./Funds";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <GeneralContextProvider>
      <div className="dashboard-container">
        
        {/* LEFT SIDE WATCHLIST */}
        <WatchList />

        {/* RIGHT SIDE CONTENT */}
        <div className="content">
          
          {/* TAB BUTTONS */}
          <div className="tabs">
            <button onClick={() => setActiveTab("summary")}>Summary</button>
            <button onClick={() => setActiveTab("holdings")}>Holdings</button>
            <button onClick={() => setActiveTab("positions")}>Positions</button>
            <button onClick={() => setActiveTab("orders")}>Orders</button>
            <button onClick={() => setActiveTab("funds")}>Funds</button>
          </div>

          {/* TAB CONTENT */}
          {activeTab === "summary" && <Summary />}
          {activeTab === "holdings" && <Holdings />}
          {activeTab === "positions" && <Positions />}
          {activeTab === "orders" && <Orders />}
          {activeTab === "funds" && <Funds />}

        </div>
      </div>
    </GeneralContextProvider>
  );
};

export default Dashboard;

