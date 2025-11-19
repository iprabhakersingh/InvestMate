import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: () => {},
  openSellWindow: () => {},
  closeBuyWindow: () => {},
  analyticsStock: null,
  setAnalyticsStock: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

  const [selectedStock, setSelectedStock] = useState({
    uid: null,
    ltp: null,
  });
  
  const [analyticsStock, setAnalyticsStock] = useState(null);

  // OPEN BUY WINDOW
  const handleOpenBuyWindow = (data) => {
    setSelectedStock(data);
    setIsSellWindowOpen(false);
    setIsBuyWindowOpen(true);
  };

  // OPEN SELL WINDOW
  const handleOpenSellWindow = (data) => {
    setSelectedStock(data);
    setIsBuyWindowOpen(false);
    setIsSellWindowOpen(true);
  };

  // CLOSE ANY WINDOW
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setIsSellWindowOpen(false);
    setSelectedStock({ uid: null, ltp: null });
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeBuyWindow: handleCloseBuyWindow,
        analyticsStock,
        setAnalyticsStock,
      }}
    >
      {props.children}

      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStock.uid} ltp={selectedStock.ltp} />
      )}

      {isSellWindowOpen && (
        <SellActionWindow uid={selectedStock.uid} ltp={selectedStock.ltp} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;

