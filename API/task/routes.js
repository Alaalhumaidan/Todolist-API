const express = require("express");
const { fetchTask, deleteTask, updateTask } = require("./controllers");

const router = express.Router();

router.get("/", fetchTask);
router.delete("/:taskId", deleteTask);

router.put("/:taskId", updateTask);
module.exports = router;
