const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const poetSchema = new Schema({
  username: {},
  email: {},
  password: {},
  name: {},
  // image:{},
  // info will contain skills and goals
  info: {},
  link: {},
  inquiry: {},
  //   Will we need an id?
});
const Poet = mongoose.model(`Poet`, poetSchema);
module.exports = Poet;
