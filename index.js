var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.status(200).json({
    message: "헤로쿠 테스트테스트테스트테스트테스트테스트",
  });
});

module.exports = router;
