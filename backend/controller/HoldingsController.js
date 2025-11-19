const { HoldingsModel } = require("../model/HoldingsModel.js");

module.exports.index = async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
};
