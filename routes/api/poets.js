const router = require(`express`).Router();
const poetsController = require(`../../controllers/poetsController`);

router
  // notes
  .route(`/`)
  .get(poetsController.findAll)
  .post(poetsController.create);

router
  .route(`/:id`)
  .get(poetsController.findById)
  .put(poetsController.update)
  .delete(poetsController.remove);

module.exports = router;
