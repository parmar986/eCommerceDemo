const express = require("express");
const router = express.Router();
const {
  handleUserLogin,
  handleUserRegister,
} = require("../Controllers/authController");

// router.get("/", restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
//   const allUrls = await URL.find({ createdBy: req.user._id });
//   return res.render("home", {
//     urls: allUrls,
//   });
// });
router.post("/register", handleUserRegister);
router.post("/login", handleUserLogin);
module.exports = router;
