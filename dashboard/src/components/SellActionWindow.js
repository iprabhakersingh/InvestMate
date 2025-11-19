import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid, ltp }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(ltp || 0);
    const { closeBuyWindow } = useContext(GeneralContext);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (!ltp) return;
        setStockPrice((stockQuantity * ltp).toFixed(2));
    }, [stockQuantity, ltp]);


    // const handleSellClick = () => {
    //     axios.post(
    //         "http://localhost:3002/orders/create",
    //         {
    //             name: uid,
    //             qty: stockQuantity,
    //             price: stockPrice,
    //             mode: "SELL",
    //         },
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             },
    //         }
    //     );
    //     closeBuyWindow();
    // };

    // const handleSellClick = () => {
    // axios
    //     .post(
    //         "http://localhost:3002/orders/create",
    //         {
    //             name: uid,
    //             qty: stockQuantity,
    //             price: stockPrice,
    //             mode: "SELL",
    //         },
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             },
    //         }
    //     )
    //     .then((res) => {
    //         // 🔥 ERROR HANDLING (Backend error)
    //         if (res.data.status === "ERROR") {
    //             alert(res.data.message);   // show error message
    //             return;                    // ❌ Window close mat karo
    //         }

            // 🔥 SUCCESS
            // window.dispatchEvent(new Event("ordersUpdated")); 
            // closeBuyWindow();
        // })
        // .catch(() => {
        //     alert("Sell failed");
        // });
// };

const handleSellClick = () => {
  axios
    .post(
      "http://localhost:3002/orders/create",
      { name: uid, qty: stockQuantity, price: stockPrice, mode: "SELL" },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    )
    .then((res) => {
      if (res.data?.status === "ERROR") {
        setErrorMsg(res.data.message || "Error");
        setTimeout(() => setErrorMsg(""), 3000);
        return; 
      }
      
      window.dispatchEvent(new Event("ordersUpdated"));
      closeBuyWindow();
    })
    .catch(() => {
      setErrorMsg("Sell failed. Try again.");
      setTimeout(() => setErrorMsg(""), 3000);
    });
};

    return (
        <div className="container" id="sell-window" draggable="true">
            {errorMsg && <div className="error-toast">{errorMsg}</div>}
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            value={stockQuantity}
                            onChange={(e) => setStockQuantity(e.target.value)}
                        />
                    </fieldset>


                    <fieldset>
                        <legend>Price</legend>
                        <input type="number" value={stockPrice} readOnly />
                    </fieldset>
                </div>
            </div>


            <div className="buttons">
                <span>Sell value ₹{(stockQuantity * ltp).toFixed(2)}</span>
                <div>
                    <Link className="btn btn-blue" onClick={handleSellClick}>Sell</Link>
                    <Link className="btn btn-grey" onClick={closeBuyWindow}>Cancel</Link>
                </div>
            </div>
        </div>
    );
};


export default SellActionWindow;