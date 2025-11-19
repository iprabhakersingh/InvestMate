const express = require("express");
const router = express.Router();

const { VerifyToken } = require("../middlewares/VerifyToken.js");

const { index } = require("../controller/PositionsController.js");

router.get("/index", VerifyToken, index);

module.exports = router;
