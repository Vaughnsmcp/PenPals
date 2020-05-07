const db = require(`../models`);

module.exports = {
  findAll: (req, res) => {
    db.Poet.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(400).json(err));
  },
  findById: (req, res) => {
    db.Poet.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(400).json(err));
  },
  create: (req, res) => {
    db.Poet.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(400).json(err));
  },
  update: (req, res) => {
    db.Poet.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(400).json(err));
  },
  remove: (req, res) => {
    db.Poet.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove()) // needs extra params around dbModel? try if it breaks.
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(400).json(err));
  },
};
