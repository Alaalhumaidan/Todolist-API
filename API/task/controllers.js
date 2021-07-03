let tasks = require("../../tasks");

exports.fetchTask = (req, res) => {
  res.json(tasks);
};
