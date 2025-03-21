const { Router } = require("express");
const itemsController = require("../controllers/itemsController");
const router = Router();

let items = [];

/* GET home page. */
router.get("/", itemsController.getItems); // Pass items to the template

router.post("/addItem", itemsController.addItem);

module.exports = router;
