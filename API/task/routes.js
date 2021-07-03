const express = require("express");
const { fetchTask } = require("./controllers");

const router = express.Router();

router.get("/", fetchTask);

module.exports = router;
