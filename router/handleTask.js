const haderTaskController = require("../controllers/handleTask");
const check = require("../middleware/check");

const formData = require("multer")().array();
const router = require("express").Router();
router.post(
  "/add",
  check.checkUser,
  formData,
    // uploadsFiles.single("file11"),
  haderTaskController.addTask
);

router.put(
  "/update",
  check.checkUser,
  formData,
  //   uploadsFiles.single("file"),
  haderTaskController.updateTask
);

router.delete(
  "/delete",
  check.checkUser,
  formData,
  haderTaskController.deleteTask
);

router.get(
  "/getAllTask",
  check.checkUser,
  haderTaskController.getAllTask
);

module.exports = router;
