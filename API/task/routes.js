const express = require("express");
const { fetchTask, deleteTask } = require("./controllers");

const router = express.Router();

router.get("/", fetchTask);
router.delete("/:taskId", deleteTask);

module.exports = router;
