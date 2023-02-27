const router = require("express").Router();
const documentControllers = require("./api/documentControllers");

router.use("/document", documentControllers);

module.exports = router;
