const express = require("express");
const router = express.Router();
const userControll = require("../controller/UserController");
const zodMiddleware = require("../middleware/zodMiddleware");
const authMiddleware = require("../middleware/AuthMiddleware")
const userValidationSchema = require("../util/UservalidationSchema");
const token = require("../util/TokenUtil")


router.post("/add", zodMiddleware.validationSchema(userValidationSchema), userControll.addUser);
// router.get("/", authMiddleware.authMiddleware, userControll.getAllUsers);
router.get("/", token.verifyToken, userControll.getAllUsers);
router.get("/:id", userControll.getUserById);
router.put("/:id", userControll.updateUser);
router.delete("/:id", userControll.deleteUser);
router.get("/:age", userControll.getUserByAge);
router.post("/login", userControll.loginUser);

module.exports = router;
