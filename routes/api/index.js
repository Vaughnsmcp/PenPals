const router = require(`express`).Router();
const signUpRoutes = require(`./signUps`);
const poetRoutes = require(`./poets`);

router.use(`/poets`, poetRoutes);
router.use(`/signups`, signUpRoutes);

module.exports = router;
