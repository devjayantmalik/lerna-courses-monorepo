const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
  const response = await axios.get("http://localhost:4001");
  const courses = response.data.map((course) => `<li>${course}</li>`).join("");
  return res.send(`<h1>Server Response</h1><ul>${courses}</ul>`);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Client started at http://localhost:${port}`);
});
