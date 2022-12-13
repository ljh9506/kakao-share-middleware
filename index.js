const express = require("express");
const PORT = process.env.PORT || 5050;
const cors = require("cors");

const app = express();

//middlewares
app.use(cors());

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("app listening on 5000 port");
  }
});
console.log("zz");
app.get("/", function (req, res) {
  res.send("Hello World!");
  console.log(1);
  window.alert("zz");
});
app.get("/abc", function (req, res) {
  // heroku logs --tail
  console.log(req.query, req.params);
  //   res.end(
  //     JSON.stringify(
  //       `params = ${JSON.stringify(req.params)} query = ${JSON.stringify(
  //         req.query
  //       )} header = ${JSON.stringify(req.headers)}`
  //     )
  //   );
  res.send(req.query);
});
