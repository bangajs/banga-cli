module.exports = (name) => {
     return `const router = require("express").Router();
const ${name.pascal}Ctrl = require("../controllers/${name.kebab}.controller");
const auth = require('../middlewares/auth')


router.post("/", ${name.pascal}Ctrl.create);
router.post("/auth", ${name.pascal}Ctrl.authenticate);

router.get("/", auth(), ${name.pascal}Ctrl.getMany);
router.get("/:${name.camel}Id", auth(), ${name.pascal}Ctrl.getOne);

router.put("/:${name.camel}Id", auth(), ${name.pascal}Ctrl.update);

router.delete("/:${name.camel}Id", auth(), ${name.pascal}Ctrl.delete);


module.exports = router
`
}