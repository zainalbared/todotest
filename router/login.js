const loginController = require ("../controllers/login")
const formData = require("multer")().array();
const router = require("express").Router();

router.post("/", formData, loginController.login);



module.exports = router;