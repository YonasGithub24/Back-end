const express = require("express");
const router = express.Router();
const {
  postQuestion,getspecificQuestion,
  getAllQuestion,
} = require("../controller/questionController");

router.post("/all-questions", postQuestion);
router.get("/get-questions", getAllQuestion);
router.get("/get-questions/:questionid", getspecificQuestion);

module.exports = router;
