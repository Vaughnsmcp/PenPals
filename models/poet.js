const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const poetSchema = new Schema({
  // username: { Type: String, require: true },
  // email: { Type: String, require: true },
  // password: { Type: String, require: true },
  name: { type: String, required: true },
  image:{ type: String},
  // info can contain skills and goals
  info: { type: String, required: true },
  link: { type: String, required: true },
  skills: { type: String, required: true},
  inquiry: { type: String, required: true },
  goals: { type: String, required: true }
});
const Poet = mongoose.model(`Poet`, poetSchema);
module.exports = Poet;
