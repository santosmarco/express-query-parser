const express = require("express");
const queryParser = require("./");

const app = express();

app.use(queryParser());

app.get("/", (req, res) => {
  console.log(req.query);
});

app.listen(3030, () => console.log("Listening on port 3030..."));
