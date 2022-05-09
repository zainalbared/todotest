const addDataController = require("../controllers/addData");
  
  const router = require("express").Router();
  
  router.post("/",addDataController.addData );
  
  module.exports = router;