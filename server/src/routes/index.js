const router = require("express").Router();
const controller = require("../controller/index")





router.post("/feedback-form", controller.admin.feedback)


module.exports = router