const express = require("express");

const app = express();

app.get("/", (_, res) => {
  const obj = {
    name: "sakib",
    age: "18",
  };

  res.json(obj);
});

app.listen(4000, () => {
  console.log("I am listening on port 4000");
});
