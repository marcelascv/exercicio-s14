const express = require("express")
const router = express.Router()
const controller = require("../controllers/livrosController")

router.get("/", controller.getAll)
router.post("/", controller.postLivro)
router.put("/:id", controller.putLivro)
router.delete("/:id", controller.deleteLivro)

module.exports = router;