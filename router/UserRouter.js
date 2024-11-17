const express = require("express");
const router = express.Router();
const userControll = require("../controller/UserController");
const zodMiddleware = require("../middleware/zodMiddleware");
const authMiddleware = require("../middleware/AuthMiddleware")
const userValidationSchema = require("../util/UservalidationSchema");


router.post("/add", zodMiddleware.validationSchema(userValidationSchema), userControll.addUser);
router.get("/", authMiddleware.authMiddleware, userControll.getAllUsers);
router.get("/:id", userControll.getUserById);
router.put("/:id", userControll.updateUser);
router.delete("/:id", userControll.deleteUser);
router.put("/:age", userControll.getUserByAge);

module.exports = router;
