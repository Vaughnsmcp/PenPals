const router = require(`express`).Router();
const poetRoutes = require(`./poets`);

router.use(`/poets`, poetRoutes);

module.exports = router;
