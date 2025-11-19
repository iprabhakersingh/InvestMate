import React from "react";
import { Link } from "react-router-dom";
import "./Funds.css";

const Funds = () => {
  return (
    <div className="funds-page">

      <div className="funds-header">
        <p className="subtitle">Instant, zero-cost fund transfers with UPI</p>
        <div className="funds-buttons">
          <Link className="btn btn-green">Add Funds</Link>
          <Link className="btn btn-blue">Withdraw</Link>
        </div>
      </div>

      <div className="row">

        <div className="col equity-col">
          <h3 className="section-title">Equity Funds</h3>

          <div className="table">

            <div className="data">
              <p>Available margin</p>
              <p className="value highlight">4,043.10</p>
            </div>

            <div className="data">
              <p>Used margin</p>
              <p className="value">&nbsp;&nbsp;&nbsp;3,757.30</p>
            </div>

            <div className="data">
              <p>Available cash</p>
              <p className="value">4,043.10</p>
            </div>

          </div>
        </div>

        <div className="col commodity-col">
          <div className="commodity-box">
            <h3 className="commodity-text">
              You don't have a commodity account
            </h3>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Funds;

