const express = require("express");
const router = express.Router();

const { create, index } = require("../controller/OrdersController.js");
const { VerifyToken } = require("../middlewares/VerifyToken.js");

router.post("/create", VerifyToken, create);
router.get("/index", VerifyToken, index);

module.exports = router;
