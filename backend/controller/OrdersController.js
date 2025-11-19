const { OrdersModel } = require("../model/OrdersModel.js");
const { UserModel } = require("../model/UserModel.js");

module.exports.create = async (req, res) => {
  let { name, qty, price, mode } = req.body;

  // user identify
  const user = await UserModel.findOne({ email: req.user.email }).populate("orders");

  // check if stock already exists
  let existingOrder = user.orders.find((o) => o.name === name);

  // -----------------------------------------
  // CASE 1: BUY = UPDATE existing holding
  // -----------------------------------------
  if (mode === "BUY") {
    if (existingOrder) {
      const oldQty = existingOrder.qty;
      const oldPrice = existingOrder.price;

      const newQty = Number(qty);
      const newPrice = Number(price);

      const totalCost = oldQty * oldPrice + newQty * newPrice;
      const finalQty = oldQty + newQty;
      const avgPrice = totalCost / finalQty;

      existingOrder.qty = finalQty;
      existingOrder.price = avgPrice.toFixed(2);

      await existingOrder.save();
      return res.json({ status: "UPDATED", order: existingOrder });
    }

    // If new stock (not bought before)
    let newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });

    let savedOrder = await newOrder.save();
    await UserModel.updateOne(
      { email: req.user.email },
      { $push: { orders: savedOrder._id } }
    );

    return res.json({ status: "CREATED", order: savedOrder });
  }

  // -----------------------------------------
  // CASE 2: SELL = REDUCE QTY
  // -----------------------------------------
  if (mode === "SELL") {
    if (!existingOrder) {
      return res.json({ status: "ERROR", message: "You do not own this stock." });
    }

    const sellQty = Number(qty);

    if (existingOrder.qty < sellQty) {
      return res.json({ status: "ERROR", message: "Not enough quantity." });
    }

    existingOrder.qty = existingOrder.qty - sellQty;

    if (existingOrder.qty === 0) {
      // remove order from user
      await OrdersModel.deleteOne({ _id: existingOrder._id });
      await UserModel.updateOne(
        { email: req.user.email },
        { $pull: { orders: existingOrder._id } }
      );
      return res.json({ status: "REMOVED", message: "Stock fully sold" });
    }

    // save updated holdings after sell
    await existingOrder.save();
    return res.json({ status: "SELL_UPDATED", order: existingOrder });
  }
};

module.exports.index = async (req, res) => {
  try {
    // user identify
    const user = await UserModel.findOne({ email: req.user.email }).populate("orders");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({
      status: "SUCCESS",
      orders: user.orders,
    });
  } catch (error) {
    console.error("Orders index error:", error);
    return res.status(500).json({ status: "ERROR", message: "Server error" });
  }
};
