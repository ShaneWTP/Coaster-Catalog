const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coasterSchema = new Schema({
  name: { type: String, required: true },
  park: { type: String, required: true },
  location: { type: String, required: true },
  rating: Number,
  operating: String,
  type: String,
  manufacturer: String,
  designer: String,
  model: String,
  height: { type: Number, required: true },
  length: Number,
  drop: Number,
  speed: { type: Number, required: true },
  inversions: Number,
  duration: { type: String, required: true },
  gforce: String,
  vertangle: String,
  scale: String,
  awards: [String],
  img1: {type: String, trim: true}, 
  img2: {type: String, trim: true},
  img3: {type: String, trim: true},
  img4: {type: String, trim: true},
  date: new Date(Date.now())
});

const Coaster = mongoose.model("Coaster", coasterSchema);

module.exports = Coaster;