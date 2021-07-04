const express = require("express");
const { fetchTask, deleteTask, updateTask,createTask } = require("./controllers");

const router = express.Router();

router.get("/", fetchTask);
router.delete("/:taskId", deleteTask);

router.put("/:taskId", updateTask);

router.post("/", createTask);

module.exports = router;
