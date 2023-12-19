var express = require("express");
var router = express.Router();

const messageSchema = require("../schema/message");

/* GET home page. */
router.get("/", function (req, res, next) {
  messageSchema
    .find({})
    .then((mes) => {
      res.render("index", { title: "Mini Message Board", messages: mes });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/addMessage", function (req, res) {
  res.render("form");
});

module.exports = router;
