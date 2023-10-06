const express = require("express");
const { registerStudent, getAllStudent } = require("../controller/studentController");
const router = express.Router();

router.route("/register").post(registerStudent);
router.route("/getAllStudent").get(getAllStudent);
module.exports = router;