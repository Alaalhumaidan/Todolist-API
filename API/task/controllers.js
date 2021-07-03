let tasks = require("../../tasks");

exports.fetchTask = (req, res) => {
  res.json(tasks);
};

exports.deleteTask = (req, res) => {
  const { taskId } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskId);
  if (foundTask) {
    tasks = tasks.filter((task) => task.id !== +taskId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Task Not Found." });
  }
};


exports.updateTask = (req, res) => {
  const { taskId } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskId);
  if (foundTask) {
    for (const key in req.body) foundTask[key] = req.body[key];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};