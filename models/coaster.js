const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coasterSchema = new Schema({
  name: { type: String, required: true },
  manufacturer: { type: String, required: true }
});

const Coaster = mongoose.model("Coaster", coasterSchema);

module.exports = Coaster;