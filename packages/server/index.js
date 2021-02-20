const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  return res.json(["Course 1", "Course 2", "Course 3", "Course 4"]);
});

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
