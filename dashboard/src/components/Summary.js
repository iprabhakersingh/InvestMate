import React, { useContext } from "react";
import { useAuth } from "../hooks/useAuth";
import GeneralContext from "./GeneralContext";

const Summary = () => {
  const { user } = useAuth();
  const { analyticsStock } = useContext(GeneralContext);

  if (analyticsStock) {
    return (
      <>
        <div className="section">
          <div
            style={{
              width: "80%",
              maxWidth: "950px",
              margin: "0 auto",
              padding: "10px 0 30px 0",
            }}
          >
            <img
              src={`/charts/${analyticsStock.name}.png`}
              alt={analyticsStock.name}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "14px",
                objectFit: "contain",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.12)",
              }}
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="username">
        <h6>Hi, {user?.username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
