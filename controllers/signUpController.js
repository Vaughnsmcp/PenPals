const db = require(`../models`);

module.exports = {
    create: (req, res) => {
        db.SignUp.create(req.body)
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(400).json(err));
      },
      findById: (req, res) => {
          db.SignUp.findById(req.params.id)
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(400).json(err));
      }
};