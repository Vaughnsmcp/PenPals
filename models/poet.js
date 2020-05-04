const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const poetSchema = new Schema({
  username: { Type: String, require: true },
  email: { Type: String, require: true },
  password: { Type: String, require: true },
  name: { Type: String, require: true },
  // image:{},
  // info will contain skills and goals
  info: { Type: String, require: true },
  link: { Type: String, require: true },
  inquiry: { Type: String, require: true },
});
const Poet = mongoose.model(`Poet`, poetSchema);
module.exports = Poet;
