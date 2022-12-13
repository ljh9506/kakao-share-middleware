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

app.get("/", function (req, res) {
  res.send("Hello World!");
});
