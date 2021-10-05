const router = require("express").Router();
const UserCtrl = require("./../controllers/user.controller");
const auth = require("./../middlewares/auth.middleware");
const upload = require("./../middlewares/upload.middleware")
const config = require("./../config")


router.get("/", auth(config.role.USER), UserCtrl.findAll);
router.get("/:user_id", auth(config.role.USER), UserCtrl.findOne);
router.put("/:user_id", auth(config.role.USER), upload([{ name: "image", maxCount: 1 }]), UserCtrl.updateOne);
router.delete("/:user_id", auth(config.role.USER), UserCtrl.deleteOne);


module.exports = router