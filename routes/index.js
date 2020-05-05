const path = require(`path`);
const router = require(`express`).Router();
const apiRoutes = require(`./api`);

// api routes
router.use(`/api`, apiRoutes);
router.use((req, res) => {
  //Ask questions here
  res.sendFile(path.join(__dirname, `../client/build/index.html`));
});
module.exports = router;
