const router = require(`express`).Router();
const signUpController = require(`../../controllers/signUpController`);

router
  //
  .route(`/`)
  .post(signUpController.create);

router
  //
  .route(`/:id`)
  .get(signUpController.findById);

module.exports = router;
