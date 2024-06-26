const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  postAllanswers,
  getAllAnswer,
} = require("../controller/answerController");

router.get("/getanswer/:questionid", getAllAnswer);
router.post("/post-answers/:questionid", postAllanswers);

module.exports = router;
