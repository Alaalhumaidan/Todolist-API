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
