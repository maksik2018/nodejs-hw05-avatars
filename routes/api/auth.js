const express = require("express");

const router = express.Router();
const { auth, validation, ctrlWrapper } = require("../../middlewares");
// const { joiRegisterSchema } = require("../../models/user");
const { joiRegisterSchema, joiLoginSchema } = require("../../models/user");

const { auth: ctrl } = require("../../controllers");

router.post(
  "/register",
  validation(joiRegisterSchema),
  ctrlWrapper(ctrl.register)
);
router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));
router.post("/logout", auth, ctrlWrapper(ctrl.logout));
module.exports = router;
