const controllers = require('../controllers/controller.js');
const router = require('express').Router();

router.route("/testing").get(controllers.testing);
router.route("/delete_source/:id").post(controllers.delete_source);
router.route("/sources").get(controllers.sources);
router.route("/add_source").post(controllers.add_source);



module.exports = router;