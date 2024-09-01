const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController.js");
router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);
console.log("authUser", authUser);

module.exports = router;
