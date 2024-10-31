const express = require("express");
const router = express.Router();
const userControll = require("../controller/UserController");

router.post("/add", userControll.addUser);
router.get("/", userControll.getAllUsers);
router.get("/:id", userControll.getUserById);
router.put("/:id", userControll.updateUser);
router.delete("/:id", userControll.deleteUser);
router.put("/:age", userControll.getUserByAge);

module.exports = router;
