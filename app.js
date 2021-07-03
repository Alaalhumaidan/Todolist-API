const express = require("express");
const cors = require("cors");
const taskRout = require("./API/task/routes");

const app = express();

app.use(cors());
app.use("/tasks", taskRout);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
