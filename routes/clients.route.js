const {
  findAll,
  create,
  update,
  findOne,
  remove,
} = require("../controllers/clients.controller");
const router = require("express").Router();

router.get("/", findAll);
router.get("/:id", findOne);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);

module.exports = router;
